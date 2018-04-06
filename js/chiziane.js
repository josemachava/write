"use strict";


window.onload = function () {

    var editor = document.querySelector("#page");

    var save = document.querySelector("#save");
    save.addEventListener("click", function () {
        var getValues = editor.value;
        if(getValues.length == 0){
            alert("Empty");
        }else {
            alert(getValues.trim().length);
        }

    });

};





