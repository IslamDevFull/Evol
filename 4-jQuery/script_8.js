$("#but0").addClass("box").click(function(){
    $("#but0").css({backgroundColor:"green",border:"5px inset grey"});
    $("#but1").css({backgroundColor:"#333",border:"5px outset grey"});
});
$("#but1").addClass("box").click(function(){
    $("#but0").css({backgroundColor:"#333",border:"5px outset grey"});
    $("#but1").css({backgroundColor:"green",border:"5px inset grey"});
});