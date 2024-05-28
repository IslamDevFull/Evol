function bkColor(){
    document.getElementById("header").classList.toggle("fon");
}
function padding(){
    document.getElementById("header").classList.toggle("padding");
}
function center(){
    document.getElementById("header").classList.toggle("center");
}
function border(){
    document.getElementById("header").classList.toggle("border");
}
function size(){
    document.getElementById("header1").classList.toggle("size");
}
function bkColor1(){
    document.getElementById("menyu").classList.toggle("fonMenyu");
}
function padding1(){
    document.getElementById("menyu").classList.toggle("paddingMenyu");
}
function center1(){
    document.getElementById("menyu").classList.toggle("center");
}
function border1(){
    document.getElementById("menyu").classList.toggle("borderMenyu");
}
function size1(){
    document.getElementById("menyu").classList.toggle("sizeMenyu");
}
function Color(){
    let i;
   let Color = document.getElementsByClassName("men");
   for(i = 0; i < Color.length; i++){
    Color[i].classList.toggle("Color");
   }
}
function None(){
    let i;
   let None = document.getElementsByClassName("men");
   for(i = 0; i < None.length; i++){
    None[i].classList.toggle("None");
   }
}

function Margin(){
    let i;
   let Margin = document.getElementsByClassName("men");
   for(i = 0; i < Margin.length; i++){
    Margin[i].classList.toggle("Margin");
   }
}
// ********************************************************************** \\
function contBkColor(){
    document.getElementById("content").classList.toggle("contBkColor");
}
function contPadding(){
    document.getElementById("content").classList.toggle("contPadding");
}
function contCenter(){
    document.getElementById("content").classList.toggle("contCenter");
}
function contBorder(){
    document.getElementById("content").classList.toggle("contBorder");
}
function contSize(){
    document.getElementById("conth1").classList.toggle("contSize");
}
function contHeight(){
    document.getElementById("content").classList.toggle("contHeight");
}