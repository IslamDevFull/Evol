document.addEventListener("mouseout", out)
document.addEventListener("mouseover", over)
document.addEventListener("click", click)
function out(){
    document.getElementById("demo").innerHTML = "Tashqari";
    document.getElementById("demo").style.fontSize = "35px";
}

function over(){
    document.getElementById("demo").innerHTML = "Ichkari";
    document.getElementById("demo").style.fontSize = "35px";
}

function click(){
    document.getElementById("demo").innerHTML = "Bosildi";
    document.getElementById("demo").style.fontSize = "35px";
}