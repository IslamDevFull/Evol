function fan(){
    let x = document.getElementById("demo").value;
    if(900 < x && 2000 > x)
    {
        document.getElementById("suz").innerHTML = "Bir ming So'm";
    }
    else if(1000 < x && 3000 > x)
    {
        document.getElementById("suz").innerHTML = "Ikki ming So'm";
    }
    else if(2000 < x && 4000 > x)
    {
        document.getElementById("suz").innerHTML = "Uch ming So'm";
    }
    else if(3000 < x && 5000 > x)
    {
        document.getElementById("suz").innerHTML = "To'rt ming So'm";
    }
    else if(4000 < x && 6000 > x)
    {
        document.getElementById("suz").innerHTML = "Besh ming So'm";
    }
    else if(5000 < x && 7000 > x)
    {
        document.getElementById("suz").innerHTML = "Olti ming So'm";
    }
    else if(6000 < x && 8000 > x)
    {
        document.getElementById("suz").innerHTML = "Yetti ming So'm";
    }
    else if(7000 < x && 9000 > x)
    {
        document.getElementById("suz").innerHTML = "Sakiz ming So'm";
    }
    else if(8000 < x && 10000 > x)
    {
        document.getElementById("suz").innerHTML = "To'qiz ming So'm";
    }
    else if(9000 < x && 11000 > x)
    {
        document.getElementById("suz").innerHTML = "O'n ming So'm";
    }
    else if(1 < x && 1000 > x)
    {
        document.getElementById("suz").innerHTML = "Kechirasiz bankomat ming sumdan kam pul bermaydi";
    }
    else if(10000 < x && 1000000 > x)
    {
        document.getElementById("suz").innerHTML = "Kechirasiz bankomat O'n ming sumdan ko'p pul bermaydi";
    }
    else
    {
        document.getElementById("suz").innerHTML = "XATO! (24EREU)";
    }
}