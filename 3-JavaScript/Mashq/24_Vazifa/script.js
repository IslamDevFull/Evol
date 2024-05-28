function fan(){
    let x = document.getElementById("demo").value;

    if('Islam' == x || 'islam' == x)
    {
        document.querySelector("ul").innerHTML = `<li><mark>${x}</mark><br> Tug'ulgan Yili : 28 <br> Yashash manzili : buxoro</li>`;
    }
    else if('Sanjar' == x  || 'sanjar' == x)
    {
        document.querySelector("ul").innerHTML = `<li><mark>${x}</mark><br> Tug'ulgan Yili : 19 <br> Yashash manzili : Samarqand</li>`;
    }
    else if('Maxmud' == x || 'maxmud' == x)
    {
        document.querySelector("ul").innerHTML = `<li><mark>${x}</mark><br> Tug'ulgan Yili : 16 <br> Yashash manzili : Toshkent</li>`;
    }
    else if('' == x || ' ' == x)
    {
        document.querySelector("ul").innerHTML = `<p>Bo'sh qolmasligi kerak</p>`;
    }
    else
    {
        document.querySelector("ul").innerHTML = `<p>(Xato!) <mark>${x}</mark> degan foydalanuvchi yoq</p>` ;
    }
}
