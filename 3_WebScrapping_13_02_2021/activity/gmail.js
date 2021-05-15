const cheerio = require('cheerio');
const fetch = require('node-fetch')
const cnn = 'https://lite.cnn.com/en';
const string = 'Trump';


function getFromCNN(resp) {
fetch(cnn)
.then(res=>res.text())
.then((html)=>{
   resp(html);
   // resp(VideoTitles) 
})
.catch((err)=>{
    console.log(err);
})
};

function getLatestHeadline(data) {
    const $ = cheerio.load(data);
    let VideoTitles = [];
    $('ul').children('li').each(function(i,el){ 
              VideoTitles.push({title : $(el).text() ,link : $(el).children('a').attr('href') })
      
    })
    return VideoTitles[0];
   
}

function compare() {
    getFromCNN((data)=>{
        let previousHeadline  = getLatestHeadline(data)
        console.log(previousHeadline)
        setTimeout(()=>{
            getFromCNN((data)=>{
               let newestHeadline = getLatestHeadline(data);
                if(newestHeadline.title !== previousHeadline.title) {
                    console.log('new article found');
                    console.log(newestHeadline);
                    if(newestHeadline.title.includes(string)) console.log("Trump post found");
                }
            })
        },2*1000)
    })
}
setInterval(compare,10*1000);