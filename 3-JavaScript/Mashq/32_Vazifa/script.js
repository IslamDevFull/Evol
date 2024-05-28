function fan(){
    let num = document.getElementById("b").value;
    switch(num){
        case "UZB":
            document.getElementById("demo").innerHTML = "Dushanba Seshanba Chorshanba Payshanba Juma Shanba Yakshanba";
            break;
            case "RUS":
            document.getElementById("demo").innerHTML = "Понидельник Вторник Среда Четверг Пятница Суббота Воскресение";
            break;
    }
}