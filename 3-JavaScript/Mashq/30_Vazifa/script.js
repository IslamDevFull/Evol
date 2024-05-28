window.onscroll = function(){scrol()};
function scrol(){
    if(document.documentElement.scrollTop > 420){
        // document.getElementById("menyu").style.padding = "10px 0px";    
        document.getElementById("demo1").style.padding = "10px";    
        document.getElementById("demo2").style.padding = "10px";    
        document.getElementById("demo3").style.padding = "10px";    
        document.getElementById("demo4").style.padding = "10px";    
        document.getElementById("demo5").style.padding = "10px";    
    }
    else{
        // document.getElementById("menyu").style.padding = "30px 0px";    
        document.getElementById("demo1").style.padding = "30px";    
        document.getElementById("demo2").style.padding = "30px";    
        document.getElementById("demo3").style.padding = "30px";    
        document.getElementById("demo4").style.padding = "30px";    
        document.getElementById("demo5").style.padding = "30px";    

    }
}
