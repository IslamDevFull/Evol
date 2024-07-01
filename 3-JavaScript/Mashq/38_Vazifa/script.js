fan();
function fan(){
    const cars = ["Matiz","Gentra","Nexia","Malibu"];
    let name = document.getElementById("name").value;
    document.getElementById("demo").innerHTML = cars.join(name);
} 
