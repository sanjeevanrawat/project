let fs = require("fs");
console.log("before");
//callback is the older way to do async programming
fs.readFile("f1.txt",function cb(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("data-> ", data);
    }
});
//
let promise = fs.promises.readFile("f1.txt");
console.log("Initial state", promise);
console.log("after");

promise.then(function(data){
    console.log(data);
});
console.log("after promise");
promise.catch(function(err){
    console.log("err", err);
});
console.log("hello");