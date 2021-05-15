let {helpFn} = require("./command/help");
let {organizeFn} = require("./command/organize");
let {viewFn} = require("./command/view");
let input = process.argv.slice(2);
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFn();
        break;
    case "organize":
        organizeFn();
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Wrong command enter help to see list of all")
}