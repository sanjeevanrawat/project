let iconContainer = document.querySelector(".icon-container");
let sheetList = document.querySelector(".sheet-list")
iconContainer.addEventListener('click', function(){
    console.log('df');
    //create element
    let newSheet = document.createElement('div');

    //get attribute
    let allSheet = document.querySelectorAll('.sheet');
    let lastSheet = allSheet[allSheet.length - 1];
    let idx = lastSheet.getAttribute('idx');

    //set class
    newSheet.setAttribute('class', 'sheet');

    //set attribute
    newSheet.setAttribute('idx', Number(idx)+1);

    //set inner text
    newSheet.innerText = `sheet- ${Number(idx)+2}`;

    //append it
    sheetList.appendChild(newSheet);
    
})
document.querySelector()