// npm insatll puppeteer
// const { copyFileSync } = require("fs");
let puppeteer = require("puppeteer");
//browes launsh
let browserwillbelaunchedpromise = puppeteer.launch({
    headless:false
})
browserwillbelaunchedpromise.then(function(browserInstance){
    //new tab
    let newPagePromise = browserInstance.newPage();
    newPagePromise.then(function(newPage){
        console.log("new tab opened");
        //pepcoding
        let pageWillBeOpenedPromise = newPage.goto("https://www.pepcoding.com");
        pageWillBeOpenedPromise.then(function(){
            console.log("page is opened");
        })
    })
})