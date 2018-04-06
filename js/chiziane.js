"use strict";


window.onload  = () => {

    let editor = document.querySelector("#page");

    let save = document.querySelector("#save");
    save.addEventListener("click", function () {
        let  getValues = editor.value;
        if(getValues.length == 0){
            alert("Empty");
        }else {
            alert(getValues.trim().length);
        }

    });

};





