"use strict"
window.onload = function(){

    let textarea = "<textarea id='page' class='col-md-12' placeholder='write here'></textarea>"
    document.body.innerHTML = textarea;
    var editor = document.getElementById("page");
    var getValueEditor = editor.value;

}
