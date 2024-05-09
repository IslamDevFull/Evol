$("button").addClass("box").text("Button").mouseenter(function(){
    alert("Hello jQuery");
    $("button").css({backgroundColor:"green",color:"black",border:"5px outset grey"});
});
$("body").click(function(){
    alert("Click jQuery");
    $("button").css({backgroundColor:"#333",color:"wheat",border:"5px solid grey",outline:"0px solid grey",outlineOffset:"5px"});
});