for(let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('blur', function(){
        let{rid, cid} = getRidCidFromAddress();
        /*gives rid and cid of element ,in which we are before 
        ex-{ (0,1) after clicking on somewhere else(lets say (1,0)) it gives rid = 0, cid = 1}*/
        let cellObj = sheetArr[rid][cid];
        if(cellObj.value == allCells[i].innerText){
            return;
        }
        cellObj.value = allCells[i].innerText;
        // console.log(cellObj.value);
        //it updates all of its children value related to this cell
        updateChildren(cellObj);
        if(cellObj.formula){
            removeFormula(addressElem.value, cellObj, cellObj.formula);
        }
    })
}

//we added event listener to formulaBar
formulaBar.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && formulaBar.value != ''){
        let{rid, cid} = getRidCidFromAddress();
        //get formula from formulaBar & formula should have space b/w them
        let cFormula = formulaBar.value;
        let cellObj = sheetArr[rid][cid];
        if(cellObj.formula == cFormula){
            return;
        }
        //UPDATING THE FORMULA. first we remove old formula
        if(cellObj.formula){
            removeFormula(addressElem.value, cellObj, cellObj.formula);
        }
        //getting evaluated value using formula
        let val = evaluateFormula(cFormula);
        //setting value in ui(sheet)  
        setCell(val , rid, cid, cFormula);
        //adds children to parent cell using formula
        setFormula(cFormula, addressElem.value);
}
})

function removeFormula(myName, cellObj, cFormula){
    let formulaTokens = cFormula.split(' ');
    for(let i = 0; i < formulaTokens.length; i++){
        let ascii = formulaTokens[i].charCodeAt(0);
        //checking if first character of any element in array is an alphabet
        if(ascii >= 65 && ascii <= 90){
            //to getting its value,
            //1. get its rid and cid, (ex-> formulaTokens[i] = A1) 
            let parentCell = formulaTokens[i];
            let pCid = Number(parentCell.charCodeAt(0)) - 65;
            let pRid = Number(parentCell.slice(1)) - 1;
            // console.log(pRid, pCid);
            //2.get its value from sheetArr
            let parentObj = sheetArr[pRid][pCid];
            let idx = parentObj.children.indexOf(myName);
            // console.log(pValue);
            //setting its val in formulaTokens (replacing: A1 -> 10(value of A1 cell))
            parentObj.children.splice(idx, 1);
        }
    }
    cellObj.formula = "";
}

function updateChildren(cellObj){
    //takes cellObj and extract children array from it
    let children = cellObj.children;
    for(let i = 0; i < children.length; i++){
        //gets child from array
        let child = children[i];
        let cCid = Number(child.charCodeAt(0)) - 65;
        let cRid = Number(child.slice(1)) - 1;
        //getting child formula
        let cFormula = sheetArr[cRid][cCid].formula;
        //evaluating it again
        let value = evaluateFormula(cFormula);
        // console.log(value);
        //setting updated value to it
        setCell(value, cRid, cCid, cFormula);
        //and call updateChildren for this current child childrens and update all those values recursively 
        updateChildren(sheetArr[cRid][cCid]);
    }
}

function evaluateFormula(cFormula){
    //gives array of formula by splitting them on the basis of space
    let formulaTokens = cFormula.split(' ');
    for(let i = 0; i < formulaTokens.length; i++){
        let ascii = formulaTokens[i].charCodeAt(0);
        //checking if first character of any element in array is an alphabet
        if(ascii >= 65 && ascii <= 90){
            //to getting its value,
            //1. get its rid and cid, (ex-> formulaTokens[i] = A1) 
            let parentCell = formulaTokens[i];
            let pCid = Number(parentCell.charCodeAt(0)) - 65;
            let pRid = Number(parentCell.slice(1)) - 1;
            // console.log(pRid, pCid);
            //2.get its value from sheetArr
            let pValue = sheetArr[pRid][pCid].value;
            // console.log(pValue);
            //setting its val in formulaTokens (replacing: A1 -> 10(value of A1 cell))
            formulaTokens[i] = pValue;
        }
    }
    //making it String again (Before-> 2 * A1 : Now-> 2 * 10) 
    let finalFormula = formulaTokens.join(" ");
    console.log(finalFormula);
    //this'll evaluate formula
    return eval(finalFormula);
}

function setFormula(cFormula, myName){
    //it gets parent cells from formula and add children cell to them 
    let formulaTokens = cFormula.split(' ');
    for(let i = 0; i < formulaTokens.length; i++){
        let ascii = formulaTokens[i].charCodeAt(0);
        if(ascii >= 65 && ascii <= 90){
            //parent cell for children 
            let parentCell = formulaTokens[i];
            let pCid = Number(parentCell.charCodeAt(0)) - 65;
            let pRid = Number(parentCell.slice(1)) - 1;
            // add children to parent cell
            sheetArr[pRid][pCid].children.push(myName);
        }
    }
}

function setCell(val, rid, cid, cFormula){
    //ui
    let uiCell = document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
    uiCell.innerText = val;
    
    //db
    sheetArr[rid][cid].value = val;
    sheetArr[rid][cid].formula = cFormula;

}