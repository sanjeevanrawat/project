let fs = require("fs");
fs.readFile("f11.txt", cb);
function cb(err, data){
        console.log(err);
        if(err){
            console.log(err);
        }else{
            console.log("content->" + data);
        }
}