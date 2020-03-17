function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data))
    //console.log(ev.target.childNodes[2])
    var txt = ev.target.childNodes[2];
    console.log(txt);
    //localStorage.setItem("drop",  '<img src="img_logo.gif" id="drag1" style="height: 40px; width: 200px;" draggable="true" ondragstart="drag(event)">');
    //localStorage.setItem("drop", ); //위치
    localStorage.setItem("here", ev.target.id); //위치
    localStorage.setItem("drop", txt.outerHTML); //위치
}

function allowDrop(ev){
    ev.preventDefault();
}

var click = document.getElementById('click');

click.onclick = function() {

    var drop = localStorage.getItem("drop");
    var here = localStorage.getItem("here");

    console.log(localStorage.getItem("here"));
    
    var target = document.getElementById(here);
    target.innerHTML = drop;

}