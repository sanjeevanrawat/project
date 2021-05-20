let topRow = document.querySelector('.top-row');
let leftCol = document.querySelector('.left-col');
let grid = document.querySelector('.grid');
let columns = 26;
let row = 100;
for (let i = 0; i < columns; i++) {
    let div = document.createElement('div');
    div.innerText = String.fromCharCode(65 + i);
    div.classList.add('cell');
    topRow.appendChild(div);
}

for (let i = 0; i < row; i++) {
    let div = document.createElement('div');
    div.innerText = i + 1;
    div.classList.add('block');
    leftCol.appendChild(div);
}
sheetArr = [];
for (let i = 0; i < row; i++) {
    let row = document.createElement('div');
    let rowArr= [];
    row.setAttribute('class', 'row');
    for (let j = 0; j < columns; j++) {
        let cell = document.createElement('div');
        //div.innerText = `${String.fromCharCode(65 + j)} ${i + 1}`;
        cell.setAttribute('class' , 'cell');
        cell.setAttribute('rid', i);
        cell.setAttribute('cid', j);
        cell.setAttribute('contenteditable', 'true');
        row.appendChild(cell);
        let cellObj = {
            isBold : false,
            isItalic : false,
            isUnderline : false,
            fontFamily :'sans-serif',
            fontSize : 16,
            color : 'black',
            bgcolor : '',
            halign:'centre',
            value : "",
            formula : '',
            children : [],
        }
        rowArr.push(cellObj);
    }
    sheetArr.push(rowArr);
    grid.appendChild(row);
}

let allCells = document.querySelectorAll('.grid .cell');
let addressElem = document.querySelector('.address');


allCells[0].click();
