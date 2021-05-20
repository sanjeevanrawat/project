for(let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('blur', function(){
        let{rid, cid} = getRidCidFromAddress();
        let cellObj = sheetArr[rid][cid];
        cellObj.value = allCells[i].innerText;
    })
}

//1. we added event listener to formulaBar
formulaBar.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && formulaBar.value != ''){

//2. get formula from formulaBar
    let cFormula = formulaBar.value;
//3. getting evaluated value using formula
    let val = evaluateFormula(cFormula);

//4. setting value in ui(sheet) 
    let{rid, cid} = getRidCidFromAddress();
    setCell(val , rid, cid, cFormula);
}
})

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
    // console.log(finalFormula);
    //this'll evaluate formula
    return eval(finalFormula);
}

function setCell(val, rid, cid, cFormula){
    //ui
    let uiCell = document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
    uiCell.innerText = val;
    
    //db
    sheetArr[rid][cid].value = val;
    sheetArr[rid][cid].formula = cFormula;

}