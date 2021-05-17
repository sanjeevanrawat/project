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

for (let i = 0; i < row; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < columns; j++) {
        let div = document.createElement('div');
        // div.innerText = `${String.fromCharCode(65 + j)} ${i + 1}`;
        div.classList.add('cell');
        div.setAttribute('rid', i);
        div.setAttribute('cid', j);
        div.setAttribute('contenteditable', 'true');
        row.appendChild(div);
    }
    grid.appendChild(row);
}

let allCells = document.querySelectorAll('.grid .cell');
let addressEle = document.querySelector('.address');
for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', function () {
        let cid = allCells[i].getAttribute('cid');
        let rid = allCells[i].getAttribute('rid');
        cid = Number(cid);
        rid = Number(rid);
        addressEle.value = `${String.fromCharCode(65 + cid)} ${rid + 1}`;
    })
}

