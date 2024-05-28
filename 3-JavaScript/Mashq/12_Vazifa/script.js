function fan(name){
    if(name == 1){
        document.querySelector('h1').innerHTML = 'Dushanbe';
    }
    else if(name == 2){
        document.querySelector('h1').innerHTML = 'Seshanbe';
    }
    else if(name == 3){
        document.querySelector('h1').innerHTML = 'Chorshanbe';
    }
    else if(name == 4){
        document.querySelector('h1').innerHTML = 'Payshanbe';
    }
    else if(name == 5){
        document.querySelector('h1').innerHTML = 'Juma';
    }
    else if(name == 6){
        document.querySelector('h1').innerHTML = 'Shanbe';
    }
    else if(name == 7){
        document.querySelector('h1').innerHTML = 'Yakshanbe';
    }
    else{
        document.querySelector('h1').innerHTML = 'Xatto';
    }
}
document.querySelector('input').addEventListener('keyup',()=>{
    let nameValue = document.querySelector('input').value;
    fan(nameValue)
})

