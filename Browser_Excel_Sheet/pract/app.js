var title = document.querySelector('#book-list ul li .name')
//console.log(title)

//.getElementsByClassName -> gives HTML collection -> needs to convert it in array to use loop in it
var movie = document.getElementsByClassName(".name");
// console.log(movie);


//console.log("fs");
//querySelectorAll -> node list deta h ..no need to convert it in array
title = document.querySelectorAll('#book-list li')
// console.log(title); 



/*title ko array me convert kiya -> forEach loop lga k function me pass krdiya -> book name ka parameter bna k paas kiya 
and then we print it */
Array.from(title).forEach(function(book){
    // book.textContent = "(book title)"  
    //console.log(book.textContent);
})

const books = document.querySelector("#book-list")
//.innerHTML -> gives all the HTML code inside books 
//console.log(books.innerHTML);  

// books.innerHTML = "<p> This is how we change the HTML"

//books.innerHTML += "<p> This is how we append the HTML" // this'll append this html to books

// const bookList = document.querySelector("#book-list");
// console.log(bookList.nodeName);// gives DIV in case of div , H1 etc
// console.log(bookList.nodeType);//gives number which represents type of node, 1 -> Element
// console.log(bookList.hasChildNodes());//gives true or false , if it has child or not
// var bookL = bookList.cloneNode(false);//<div id="book-list"></div> gives only this if we put false
// bookL = bookList.cloneNode(true);// gives full Html with its child 
// console.log(bookL);
var bookList = document.querySelector("#book-list");
// console.log(bookList.parentElement);//gives its parent node
// console.log(bookList.parentNode);//gives its parent node
// console.log(bookList.parentNode.parentNode);//gives its parents parent node
// console.log(bookList.childNodes);//it gives its child with line breaks(text) 
// console.log(bookList.children);//it gives only element childs


// console.log(bookList.nextSibling); // gives us next sibling element node or line break
// console.log(bookList.nextElementSibling);// gives us next sibling element node
// console.log(bookList.previousSibling);//gives us previous sibling element node or line break
// console.log(bookList.previousElementSibling);//gives us previous sibling element node

//bookList.querySelector('li').innerHTML += '<p> too cool </p>';// it adds this line to first li 
// var del = document.querySelectorAll('#book-list li .delete');
// // console.log(del);

// del.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentElement.removeChild(li);
//     })
// });

const ul = document.querySelector('#book-list ul');
ul.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target.className == 'delete'){

        ul.removeChild(e.target.parentElement);
    }
});

const forms = document.forms;
// console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
    // console.log(form);
})
// Array.from(forms).forEach(function(form){
//     console.log(form);
//   });

bookList = document.querySelector('#book-list ul');

// addBook.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e.target);
//     const value = addBook.querySelector('input[type="text"]').value;
//     console.log(value);
// });

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);

  //create elements
  
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //adding values or content

  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  //adding classesefsgr
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // appending it to document

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  bookList.appendChild(li);

});


const book = document.querySelector('#book-list .name');
console.log(book.getAttribute('class'));
console.log(book.setAttribute('class', 'name-2'));
console.log(book.hasAttribute('class'));
console.log(book.removeAttribute('class'));



const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        bookList.style.display = 'none';
    }else{
        bookList.style.display = 'initial';
    }
})

const searchBox = document.forms['search-books'].querySelector('input');

searchBox.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();

    const books = bookList.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    })
});



// const a = document.querySelector('#add-book ');

// a.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log(e.target.textContent, 'is prevented all thanks to me ');
// })






