let url = "https://github.com/topics";
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
let PDFDocument = require("pdfkit");
const { createInflate } = require("zlib");
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        // console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let topicsArr = selectorTool(".no-underline.d-flex.flex-column.flex-justify-center");
    for (let i = 0; i < topicsArr.length; i++) {
        let link = "https://github.com" +  selectorTool(topicsArr[i]).attr("href");

        // console.log(link);
        processRepoPage(link);
        // console.log("~~~~~~~~");
    }
}
function processRepoPage(link) {
    request(link, cb);
    function cb(error, response, html) {
        if (error) {
            console.log(error)
        } else {
            // console.log(html);
            extractRepo(html);
            // console.log("````````````````````````````");
        }
    }
}
function extractRepo(html) {
    let selectorTool = cheerio.load(html);
    let topicElem = selectorTool("h1.h1-mktg");
    console.log(topicElem.text());
    let repoElem = selectorTool("a.text-bold");
    let topicName = topicElem.text().trim();
    dirCreator(topicName);
    for(let i = 0; i < 8; i++){
        let repoLink = selectorTool(repoElem[i]).attr("href");
        let repoName = repoLink.split("/").pop();
        repoName = repoName.trim();
        // console.log("https://github.com" + repo);
        let fullRepoLink = "https://github.com" + repoLink + "/issues";
        getIssues(repoName, topicName, fullRepoLink);
        createFile(repoName, topicName);
    }
    console.log("---------------------");
    
    // let player = selectorTool(birthdayElem[1]).text();
    // console.log(player);
}
function getIssues(repoName, topicName, fullrepoLink){
    request(fullrepoLink, cb);
    function cb(err, resp, html){
        if(err){
            if(resp.statusCode == 404){
                console.log("No Issue Page Found");
            }else{
                console.log(err);
            }
        }else{
            extractIssues(html, repoName, topicName);
        }
    }
}
function extractIssues(html, repoName, topicName){
    let seltool = cheerio.load(html);
    let issueAncArr = seltool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    let arr = [];
    for(let i = 0; i < issueAncArr.length; i++){
        let name = seltool(issueAncArr[i]).text();
        let link = seltool(issueAncArr[i]).attr("href");
        arr.push({
            "name":name,
            "link":"https://github.com" + link
        })
    }
    let filePath = path.join(__dirname, topicName , repoName + ".pdf");
    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(JSON.stringify(arr));
    pdfDoc.end();
}

function dirCreator(topicName){
    let pathOfFolder = path.join(__dirname,topicName);
    if(fs.existsSync(pathOfFolder) == false){
        fs.mkdirSync(pathOfFolder);
    }
}

function createFile(repoName, topicName){
    let pathofFile = path.join(__dirname, topicName, repoName + ".json");
    if(fs.existsSync(pathofFile) == false){
        let createStream = fs.createWriteStream(pathofFile);
        createStream.end();
    }
}