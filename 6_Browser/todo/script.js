let input = document.querySelector(".input_box");
input.addEventListener("keydown", function(e){
    //  e object -> describe -> event 
    // console.log(" some key was pressed");
    // console.log("event object", e);
    if(e.key == "Enter"){
        // console.log("enter is pressed");
        let task = input.value;
        console.log(task);
        let li = document.createElement("li");
        li.innerText = task;
        // li.addEventListener("dblclick", function (e) {
        //     li.remove();
        // })
        // //  add any attribute 
        // li.setAttribute("class", "task");
        ul.appendChild(li);
        // input.value = "";
    }
});