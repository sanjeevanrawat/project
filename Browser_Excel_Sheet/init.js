let topRow = document.querySelector('.top-row');
let leftCol = document.querySelector('.left-col');
let grid = document.querySelector('.grid');
let columns = 26;
let row = 100;
for(let i = 0; i < columns; i++){
    let div = document.createElement('div');
    div.innerText = String.fromCharCode(65 + i);
    div.classList.add('cell');
    topRow.appendChild(div);
}

for(let i = 0; i < row; i++){
    let div = document.createElement('div');
    div.innerText = i + 1;
    div.classList.add('block');
    leftCol.appendChild(div);
}

for(let i = 1; i <= row; i++){
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for(let j = 0; j < columns; j++){
        let div = document.createElement('div');
        div.innerText = `${String.fromCharCode(65 + j)} ${i}` ;
        div.classList.add('cell');
        row.appendChild(div);
    }
    grid.appendChild(row);
}

grid.addEventListener('click', function(e){
    let content = e.target.innerText;
    let address = document.querySelector('.address');
    address.innerText = content;
    console.log(address);

})