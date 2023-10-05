$(document).ready(function(){
    $(".div3").click(function(){
      var anime = $(".div3");
        anime.animate({height:"500px"},1000);
        anime.animate({width:"500px"},1000);
        anime.animate({fontSize:"60px"},1000);
    })
})