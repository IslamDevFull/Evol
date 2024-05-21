function myText(){
    let soz = document.getElementById("soz").value;
    let getText = window.btoa(soz);
    document.getElementById("soz1").innerHTML = getText;
    }

    function myCod(){
        let cod = document.getElementById("kod").value;
        let getCod = window.atob(cod);
        document.getElementById("kod1").innerHTML = getCod;
    }