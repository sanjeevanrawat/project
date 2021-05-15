let fs = require("fs");
function isFileChecker(dirPath) {
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath) {
return fs.readdirSync(dirPath);
}
function viewFlat(dirPath){
    let isFile = isFileChecker(dirPath);
    if(isFile == true){
        console.log(dirPath + "*");
    }else{
        console.log(dirPath);
        let childrens = readContent(dirPath);
        for(let i = 0; i < childrens.length; i++){
            viewFlat(dirPath + "/" + childrens[i]);
        }
    }
}
viewFlat("d10");