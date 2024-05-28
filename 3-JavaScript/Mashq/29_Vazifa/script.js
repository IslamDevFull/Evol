
window.onscroll = function(){fan()};
function fan(){
if(document.documentElement.scrollTop > 300){
    document.getElementsByTagName("img")[0].style.display = "block";
}
else{
    document.getElementsByTagName("img")[0].style.display = "none";
}
if(document.documentElement.scrollTop > 800){
    document.getElementsByTagName("img")[0].style.display = "none";
    document.getElementsByTagName("img")[1].style.display = "block";
}
else{
    document.getElementsByTagName("img")[1].style.display = "none";
}
if(document.documentElement.scrollTop > 1300){
    document.getElementsByTagName("img")[0].style.display = "none";
    document.getElementsByTagName("img")[1].style.display = "none";
    document.getElementsByTagName("img")[2].style.display = "block";
}
else{
    document.getElementsByTagName("img")[2].style.display = "none";
}
}