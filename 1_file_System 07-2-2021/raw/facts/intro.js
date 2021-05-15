

console.log("hello pp")
let a ;
a = "intro class";
console.log(a);
let flag = true;
let num = 24;
for(let i = 2; i*i <= num; i++){
    if(num%i == 0){
        flag = false;
        break;
    }
}
if(flag){
    console.log("prime");
}else{
    console.log("not prime");
}