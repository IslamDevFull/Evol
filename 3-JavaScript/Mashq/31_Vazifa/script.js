var result;
function fan(num){
    switch(num){
        case '1':
            result = '<mark>Baxor</mark>';
        break;
        case '2':
            result = '<mark>Yoz</mark>';
        break;
        case '3':
            result = '<mark>Kuz</mark>';
        break;
        case '4':
            result = '<mark>Qish</mark>';
        break;
        default:
            result = '<mark>Bunday fasl yo`q</mark>';
        break;
    }
    document.querySelector('h1').innerHTML = `Xozirgi fasl ${result}`
}
document.querySelector('input').addEventListener('keyup',()=>{
    let nameValue = document.querySelector('input').value;
    fan(nameValue);
});
