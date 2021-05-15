let obj = {
    name: "Steve",
    lastName : " Rogers",
    address :{
        city : "kotdwar",
        state : "Uttarakhand"
    },
    isAvenger : true,
    age: 34,
    movies : ["civil war", "fist avenger"],
    sayHi : function (param){
        console.log("greetings from cap to ", param);
        return "blessings";
    }
}
console.log("address object ", obj.address);
console.log("address state ", obj.address.state);
console.log("movie ", obj.movies[1]);
console.log("function is inside an object ", obj.sayHi("SRK"));
obj.friends = ["peter", "tony", "natasha"]
obj.age = 36
let key = "address"
obj["address"]["city"] = "fsfgds"

delete obj.age;
for(let key in obj){
    console.log("key:",key, "  value:",obj[key]);
}

