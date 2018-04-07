"use strict";


window.onload  = () => {
     function createElement(element, content, className)  {
        let  createElement = document.createElement(element);
        let elementContent = document.createTextNode(content)
        createElement.appendChild(elementContent);
        createElement.className = className;
    }
    let title = createElement("h1", "chiziane", "title");
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


