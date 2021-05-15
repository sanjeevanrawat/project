let fs = require("fs");
let path = require("path");


let input = process.argv.slice(2);
for(let idx=0; idx<input.length;idx++){
    if(input[idx]=="-s"){
        if(fs.existsSync(input[idx+1])){
            let data = fs.readFileSync(input[idx+1],'utf8');
            console.log(data.replace(/([\r\n]){2,}/g, '\n\n'));
         }else{
             console.log("File does not exists");
         }
         idx+=1;
    }else if(input[idx]=="-n"){
        if(fs.existsSync(input[idx+1])){
            let data = fs.readFileSync(input[idx+1]);
            let to_string = data.toString();
            let split_lines = to_string.split("\n");
            for(let idx=1; idx<=split_lines.length;idx++){
                console.log(idx+" "+split_lines[idx-1]);
            }
        }else{
             console.log("File does not exists");
         }
         idx+=1;
        
    }else if(input[idx]=="-b"){
        if(fs.existsSync(input[idx+1])){
            let data = fs.readFileSync(input[idx+1]);
            let to_string = data.toString();
            let split_lines = to_string.split("\n");
            let count=1;
            for(let idx=0; idx<split_lines.length;idx++){
                if(split_lines[idx] !="\r"){
                    console.log(count+" "+split_lines[idx]);
                    count++;
                }else{
                    console.log(split_lines[idx]);
                }
            }
        }else{
             console.log("File does not exists");
         }
         idx+=1;
    }else{
        if(fs.existsSync(input[idx])){
           let data = fs.readFileSync(input[idx],'utf8');
           console.log(data);
        }else{
            console.log("File does not exists");
        }
    }
}