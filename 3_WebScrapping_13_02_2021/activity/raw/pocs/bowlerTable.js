let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
let request = require("request");
let cheerio = require("cheerio");
console.log("before");
request(url, cb);
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let bowlingStats = selectorTool(".table.bowler");
    console.log(selectorTool(bowlingStats[1]).html());
    // console.log(bowlingStats.html() );
    // let lastBallComm = selectorTool(bowlingStats[1]).text();
    // console.log(lastBallComm);
}
console.log("after");