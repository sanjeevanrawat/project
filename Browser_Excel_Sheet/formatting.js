let bold = document.querySelector('.fa-bold');
let italic = document.querySelector('.fa-italic');
let underline = document.querySelector('.fa-underline');
let fontSize = document.querySelector('.font-size');
let fontFamily = document.querySelector('.font-family');
let alignmentBtn = document.querySelectorAll('.alignment-container>*');
let formulaBar = document.querySelector('.formula');
let allCells = document.querySelectorAll('.grid .cell');
let addressElem = document.querySelector('.address');
bold.addEventListener('click' , function(){
    //get address from address bar
    let uiCell = getCell();
    let {rid, cid} = getRidCidFromAddress();
    let cellObj = sheetArr[rid][cid];
    if(cellObj.isBold == true){
        uiCell.style.fontWeight = 'normal';
        bold.classList.remove('menu-active');
        cellObj.isBold = false;
    }else{
        uiCell.style.fontWeight = "bold";
        bold.classList.add("menu-active");
        cellObj.isBold = true;
    } 
})
italic.addEventListener('click', function(){
    let uiCell = getCell();
    let {rid, cid} = getRidCidFromAddress();
    let cellObj = sheetArr[rid][cid];
    if(cellObj.isItalic == true){
        uiCell.style.fontStyle = 'normal';
        italic.classList.remove('menu-active');
        cellObj.isItalic = false;

    }else{
        uiCell.style.fontStyle = "italic";
        italic.classList.add("menu-active");
        cellObj.isItalic = true;
    }
})
underline.addEventListener('click', function(){
    let uiCell = getCell();
    let {rid, cid} = getRidCidFromAddress();
    let cellObj = sheetArr[rid][cid];
    if(cellObj.isUnderline == true){
        uiCell.style.textDecoration = 'normal';
        underline.classList.remove('menu-active');
        cellObj.isUnderline = false;

    }else{
        uiCell.style.textDecoration = "underline";
        underline.classList.add("menu-active");
        cellObj.isUnderline = true;
    }
})
fontFamily.addEventListener('change', function(){
    let cfontFamily = fontFamily.value;
    let uiCell = getCell();
    let {rid, cid} = getRidCidFromAddress();
    let cellObj = sheetArr[rid][cid];
    uiCell.style.fontFamily = cfontFamily;
    cellObj.fontFamily = cfontFamily;
})

fontSize.addEventListener('change', function(){
    let cfontSize = fontSize.value;
    let uiCell = getCell();
    let {rid, cid} = getRidCidFromAddress();
    let cellObj = sheetArr[rid][cid];
    uiCell.style.fontSize = cfontSize + 'px';
    cellObj.fontSize = cfontSize;
})

for(let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', function(){
        let cid = allCells[i].getAttribute('cid');
        let rid = allCells[i].getAttribute('rid');
        cid = Number(cid);
        rid = Number(rid);
        addressElem.value = `${String.fromCharCode(65 + cid)}${rid + 1}`;
        let cellObj = sheetArr[rid][cid];
        if(cellObj.isBold == true){
            bold.classList.add("menu-active");
        }else{
            bold.classList.remove("menu-active");
        }
        if(cellObj.isItalic == true){
            italic.classList.add("menu-active");
        }else{
            italic.classList.remove("menu-active");
        }
        if(cellObj.isUnderline == true){
            underline.classList.add("menu-active");
        }else{
            underline.classList.remove("menu-active");
        }
        fontSize.value = cellObj.fontSize;
        fontFamily.value = cellObj.fontFamily;
        for(let j = 0; j < alignmentBtn.length; j++){
            alignmentBtn[j].classList.remove('menu-active');
            let cAlignment = alignmentBtn[j].getAttribute('direct');
            if(cAlignment == cellObj.halign){
                alignmentBtn[j].classList.add('menu-active');
            }
        }
        //when we click it first time its empty the formula bar because-> cellObj.formula = ''; after entering formula for it , it saves it in cellObj and shows that formula 
        formulaBar.value = cellObj.formula;
    })
}

function getCell(){
    let address = addressElem.value;
    let{rid, cid} = getRidCidFromAddress(address);
    return document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
}

function getRidCidFromAddress(){
    let address = addressElem.value;
    let cid = Number(address.charCodeAt(0)) - 65;
    let rid = Number(address.slice(1)) - 1;
    return {rid, cid};
}

for(let i = 0; i < alignmentBtn.length; i++){
    alignmentBtn[i].onclick = function(){
        let uiCell = getCell();
        let {rid, cid} = getRidCidFromAddress();
        let cellObj = sheetArr[rid][cid];
        let newAlignment = alignmentBtn[i].getAttribute('direct');
        uiCell.style.textAlign = newAlignment;
        for(let j = 0; j < alignmentBtn.length; j++){
            alignmentBtn[j].classList.remove('menu-active');
        }
        alignmentBtn[i].classList.add('menu-active');
        cellObj.halign = newAlignment;
    }
}
allCells[0].click();