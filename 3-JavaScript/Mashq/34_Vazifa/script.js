let date = new Date();
let time = date.getHours();
        let resultDate = '';
        let resultTime = '';
        switch(date.getDay()){
            case 1:
                resultDate = 'Bugungi kun <mark>Dushanbe</mark>';
            break;
            case 2:
                resultDate = 'Bugungi kun <mark>Seshanbe</mark>';
            break;
            case 3:
                resultDate = 'Bugungi kun <mark>Chorshanbe</mark>';
            break;
            case 4:
                resultDate = 'Bugungi kun <mark>Payshanbe</mark>';
            break;
            case 5:
                resultDate = 'Bugungi kun <mark>Juma</mark>';
            break;
            case 6:
                resultDate = 'Bugungi kun <mark>Shanba</mark>';
            break;
            case 7:
                resultDate = 'Bugungi kun <mark>Yakshanba</mark>';
            break;
            default : resultDate = '<mark>Xato!</mark>';
        }
            if(time <= 11){
                resultTime = `<mark>Ertalab</mark> soat ${time}:${date.getMinutes()}:${date.getSeconds()}`;
            }
            else if(time <= 15){
                resultTime = `<mark>Abed</mark> soat ${time}:${date.getMinutes()}:${date.getSeconds()}`;
            }
            else if(time <= 19){
                resultTime = `<mark>Namozgar</mark> soat ${time}:${date.getMinutes()}:${date.getSeconds()}`;
            }
            else if(time <= 23){
                resultTime = `<mark>Kechasi</mark> soat ${time}:${date.getMinutes()}:${date.getSeconds()}`;
            }
            else{
                resultTime = `<mark>Xato!</mark> soat ${time}:${date.getMinutes()}:${date.getSeconds()}`;
            }
        document.querySelector('h1').innerHTML = resultDate;
        document.querySelector('h2').innerHTML = resultTime;