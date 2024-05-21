function fan(){
    let num1 = document.getElementById("v1").value;
    let num2 = document.getElementById("v2").value;
    let num3 = document.getElementById("v3").value;
    let num4 = document.getElementById("v4").value;
    let num5 = document.getElementById("v5").value;
    if(num1 == ""){
        document.getElementById("p6").style.display = "inline";
        document.getElementById("p1").style.display = "none";
        document.getElementById("b1").style.display = "inline";
    }
    else{
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p6").style.display = "none";
        document.getElementById("b1").style.display = "none";
    }
    if(num2 == ""){
        document.getElementById("p7").style.display = "inline";
        document.getElementById("p2").style.display = "none";
        document.getElementById("b2").style.display = "inline";
    }
    else{
        document.getElementById("p2").style.display = "inline";
        document.getElementById("p7").style.display = "none";
        document.getElementById("b2").style.display = "none";
    }
    if(num3 == ""){
        document.getElementById("p8").style.display = "inline";
        document.getElementById("p3").style.display = "none";
        document.getElementById("b3").style.display = "inline";
    }
    else{
        document.getElementById("p3").style.display = "inline";
        document.getElementById("p8").style.display = "none";
        document.getElementById("b3").style.display = "none";
    }
    if(num4 == ""){
        document.getElementById("p9").style.display = "inline";
        document.getElementById("p4").style.display = "none";
        document.getElementById("b4").style.display = "inline";
    }
    else{
        document.getElementById("p4").style.display = "inline";
        document.getElementById("p9").style.display = "none";
        document.getElementById("b4").style.display = "none";
    }
    if(num5 == ""){
        document.getElementById("p10").style.display = "inline";
        document.getElementById("p5").style.display = "none";
        document.getElementById("b5").style.display = "inline";
    }
    else{
        document.getElementById("p5").style.display = "inline";
        document.getElementById("p10").style.display = "none";
        document.getElementById("b5").style.display = "none";
    }
    // if(v4 == t4){
    //     document.getElementById("i").style.display = "none";
    //     document.getElementById("p9").style.display = "none";
    // }
    // else{
    //     document.getElementById("p9").style.display = "inline";
    //     document.getElementById("i").style.display = "inline";
    // }
    // if(v5 == t5){
    //     document.getElementById("i").style.display = "none";
    //     document.getElementById("p10").style.display = "none";
    // }
    // else{
    //     document.getElementById("p10").style.display = "inline";
    //     document.getElementById("i").style.display = "inline";
    // }
}