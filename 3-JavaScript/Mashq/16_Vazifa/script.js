document.addEventListener("mouseout", out);
document.addEventListener("mouseover", over);
document.addEventListener("click", click);
document.addEventListener("scroll", scroll);
document.addEventListener("copy", copy);
document.addEventListener("dblclick", doubleClick);
function out(){
    document.getElementById("demo").style.backgroundColor = "white";
}

function over(){
    document.getElementById("demo").style.backgroundColor = "powderblue";
}

function click(){
    document.getElementById("demo").style.backgroundColor = "pink";
}

function scroll(){
    document.getElementById("demo").innerHTML = "Scroll";
    document.getElementById("demo").style.fontSize = "50px";
    document.getElementById("demo").style.padding = "300px 100px";
    document.getElementById("demo").style.textAlign = "center";
}
function copy(){
    document.getElementById("demo").innerHTML = "Copy";
}
function doubleClick(){
    document.getElementById("demo").innerHTML = "Double Click";
}