function fan(){
    let x = document.getElementById("demo").value;
    if(4 <= x && 12 > x)
    {
        document.getElementById("suz").innerHTML = "Доброе утро";
    }
    else if(12 <= x && 16 > x)
    {
        document.getElementById("suz").innerHTML = "Добрый день";
    }
    else if(16 <= x && 20 > x)
    {
        document.getElementById("suz").innerHTML = "Добрый вечер";
    }
    else if(20 <= x && 23 >= x)
    {
        document.getElementById("suz").innerHTML = "Добрый ночи";
    }
    else if(1 <= x && 3 >= x)
    {
        document.getElementById("suz").innerHTML = "Добрый ночи";
    }
    else if(0 == x)
    {
        document.getElementById("suz").innerHTML = "Добрый ночи";
    }
    else if('' == x || ' ' == x)
    {
        document.getElementById("suz").innerHTML = "Поля не должно быт пустим";
    }
    else
    {
        document.getElementById("suz").innerHTML = "Неизвестное время";
    }
}