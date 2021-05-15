// let root = {
//     name: "d10",
//     children: [
//         {
//             name: "d20",
//             children: [{
//                 name: "d50",
//                 children: []
//             }, {
//                 name: "d60",
//                 children: []
//             }]
//         }, {
//             name: "d30",
//             children: [{
//                 name: "d70",
//                 children: []
//             }, {
//                 name: "d80",
//                 children: [{
//                     name: "d110",
//                     children: []
//                 }]
//             }, {
//                 name: "d90",
//                 children: []

//             }]
//         }, {
//             name: "d40",
//             children: [{
//                 name:"d100",
//                 children: []
//             }]
//         }]
// }
// // function printgTree(node){
// //     let str = node.name + "=>";
// //     for(let i = 0; i < node.children.length; i++){
// //         str += node.children[i].name + ",";
// //     }
// //     console.log(str);
// //     for(let i = 0; i < node.children.length; i++){
// //         printgTree(node.children[i]);
// //     }
// // }
// // printgTree(root);
// function printFlat(node, str){
//     str = str + node.name + "/";
//     console.log(str);
//     for(let i = 0; i < node.children.length; i++){
//         printFlat(node.children[i], str);
//     }
// }
// printFlat(root, "");

let fs = require("fs");
let path = require("path");
function isFileChecker(dirPath) {
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath) {
return fs.readdirSync(dirPath);
}
function viewTree(dirPath, indent){
    let isFile = isFileChecker(dirPath);
    if(isFile == true){
        // console.log(indent, path.basename(dirPath) + "*");
        console.log(indent, path.basename(dirPath) + "*");
    }else{ 
        // console.log(indent, path.basename(dirPath));
        console.log(indent, path.basename(dirPath));
        let childrens = readContent(dirPath);
        for(let i = 0; i < childrens.length; i++){

            viewTree(path.join(dirPath, childrens[i]), indent + "\t");
            // viewTree(childrens[i], indent + "\t");
        }
    }
}
viewTree("d10", "");