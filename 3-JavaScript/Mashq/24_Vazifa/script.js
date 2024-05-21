function fan(){
    let x = document.getElementById("demo").value;
    let y = "6:00";
    if(x == y){
        document.getElementById("suz").innerHTML = "Доброе утро";
    }
    else{
        document.getElementById("suz").innerHTML = "Не извесное время суток";
    }
}