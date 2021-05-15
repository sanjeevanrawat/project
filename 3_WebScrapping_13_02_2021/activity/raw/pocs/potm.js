let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
let request = require("request");
let cheerio = require("cheerio");
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
    let playerArr = selectorTool(".match-info-link-FIXTURES");
    for (let i = 0; i < playerArr.length; i++) {
        let link = selectorTool(playerArr[i]).attr("href");
        // console.log("https://www.espncricinfo.com" + link);
        printPOfTM("https://www.espncricinfo.com" + link);
    }
}
function printPOfTM(link) {
    request(link, cb);
    function cb(error, response, html) {
        if (error) {
            console.log(error)
        } else {
            // console.log(html);
            extractpotm(html);
            // console.log("````````````````````````````");
        }
    }
}
function extractpotm(html) {
    let selectorTool = cheerio.load(html);
    let playerElem = selectorTool(".best-player-name");
    let player = selectorTool(playerElem).text();
    console.log(player);
    // let player = selectorTool(birthdayElem[1]).text();
    // console.log(player);

}