let fs = require("fs");
function PromisesReadFile(filePath){

    return new Promise(function(resolve, reject){
        fs.readFile(filePath,function cb(err, data){
            if(err){
                reject(err);
                //error
            }else{
                resolve(data);
                //console data
            }
        })
    })
}
let fReadFile = PromisesReadFile("f1.txt");
console.log(fReadFile);
fReadFile.then(function(data){
    console.log("data-> " + data);
})
fReadFile.catch(function(err){
    console.log(err);
})