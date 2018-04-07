"use strict";


window.onload  = () => {
    const  title = document.createElement("h1");
    const titleContent = document.createTextNode("chiziane")
    title.appendChild(titleContent);
    title.className = "title";
    let textarea = document.querySelector('textarea');
    document.body.insertBefore(title, textarea);

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

let styleTitle = () =>{
    let getTitle = document.getElementsByClassName("title");
    getTitle.style.fontSize = "50px";
    getTitle.style.backgroundColor = "red";


}
styleTitle();


