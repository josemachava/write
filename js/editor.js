window.onload = function(){
  "use strict"
  function count () {
    var page = document.getElementById('page').value;
    //var countLetter = page.toString();
    if(page.includes("Hello hello")){
        alert('includes')
    }
    if(page.search("Hello")){
      alert(("Hello"));

    }


    alert(page.length);
  }

  var el = document.getElementById('btn');
  //btn.addEventListener('click', count, true);
  el.addEventListener("click", count, false);

}
