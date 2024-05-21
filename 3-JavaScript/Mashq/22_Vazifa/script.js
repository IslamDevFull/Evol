// function fan(){
//     let x = document.getElementById("demo").value;
//     let y = document.getElementById("demo1").value;

//     if(x === y)
//     {
//         document.getElementById("suz").innerHTML = "Вас завут Ислам";
//     }
//     else
//     {
//         document.getElementById("suz").innerHTML = "(Ошибка !)На базе нет кагого ползовотеля";
//     }
// }


function fan(){
    let x = document.getElementById("demo").value;

    if(29 > x && 27 < x)
    {
        document.getElementById("suz").innerHTML = "Вас завут (Ислам)";
    }
    else if(17 > x && 15 < x)
    {
        document.getElementById("suz").innerHTML = "Вас завут (Maxmud)";
    }
    else if(14 > x && 12 < x)
    {
        document.getElementById("suz").innerHTML = "Вас завут (Usmon)";
    }
    else
    {
        document.getElementById("suz").innerHTML = "(Ошибка !)На базе нет какого пользователя";
    }
}
