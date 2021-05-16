let iconContainer = document.querySelector(".icon-container");
let sheetList = document.querySelector(".sheet-list");
let firstSheet = document.querySelector('.sheet-list');
firstSheet.addEventListener('click', handleClick);
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
    newSheet.classList.add('active');

    //set attribute
    newSheet.setAttribute('idx', Number(idx)+1);

    //set inner text
    newSheet.innerText = `sheet- ${Number(idx)+2}`;

    //append it
    sheetList.appendChild(newSheet);

    //new sheet is added to it, so we want all sheets at this current moment
    allSheet = document.querySelectorAll('.sheet');

    setLastActive(allSheet);
    // //to remove active class from all sheets
    // for(let i = 0; i < allSheet.length; i++){
    //     allSheet[i].classList.remove("active");
    // }

    // //adding active class to last sheet 
    // allSheet[allSheet.length - 1].classList.add('active');
    
    newSheet.addEventListener('click',handleClick);
});

function setLastActive(allSheet){
    for(let i = 0; i < allSheet.length; i++){
        allSheet[i].classList.remove("active");
    }
    allSheet[allSheet.length - 1].classList.add('active');
}

function handleClick(e){
    console.log(e.target);
    let sheet = e.target;
    let allSheet = document.querySelectorAll('.sheet');
    for(let i = 0; i < allSheet.length; i++){
        allSheet[i].classList.remove("active");
    }
    sheet.classList.add('active');
}

// let sL = document.querySelector(".sheet-list");
// sL.addEventListener('click',function(e){
//     console.log(e.target);
//     let allSheet = document.querySelectorAll('.sheet');
//     for(let i = 0; i < allSheet.length; i++){
//         allSheet[i].classList.remove("active");
//     }
//     e.target.classList.add("active");

// })