let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function dirCreator(dirpath){
    if(fs.existsSync(dirpath) == false){
        fs.mkdirSync(dirpath);
    }
}
let fs = require("fs");
let path = require("path");
let input = process.argv.slice(2);
let dirpath = input[0];
let orgFilePath = path.join(dirpath, "organized_files");
dirCreator(orgFilePath);
for(let key in types){
    let innerdirpath = path.join(orgFilePath, key);
    dirCreator(innerdirpath)
}
let otherPath = path.join(orgFilePath, "others");
dirCreator(otherPath);
function OrganizeDir(src, dest){

}
OrganizeDir(dirpath, orgFilePath);