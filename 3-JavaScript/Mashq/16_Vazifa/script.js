document.addEventListener("mouseout", out)
document.addEventListener("mouseover", over)
document.addEventListener("click", click)
document.addEventListener("scroll", scroll)
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
    document.getElementById("demo").innerHTML = "Dasturlash";
    document.getElementById("demo").style.fontSize = "50px";
    document.getElementById("demo").style.padding = "300px 100px";
    document.getElementById("demo").style.textAlign = "center";
}