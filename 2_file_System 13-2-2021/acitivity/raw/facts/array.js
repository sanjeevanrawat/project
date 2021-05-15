let array = [
    1,
    1.2,
    "ada shelby",
    null,
    true,
    {
        name : "john",
        lastName : "shelby"
    },
    function sayHi(){
        console.log("abcd");
        return "subArray"
    }
]
const a = ["thomas", "arthur", "john"];
// a = "sabini";
a.unshift("peaky blinders")
a.push("fin")
a.pop()
a.shift()
console.log("a =", a)
// for(let key in array){
//     console.log("key:",key, "value:", array[key] );
// }
// array[4] = "SRK"
// array[10] = "king"
// for(let i = 0; i < array.length; i++){
//     console.log("i:", i, "value:", array[i]);
// }