fan();
function fan()
{
    const cars = ["Matiz","Gentra","Nexia"];
    let name = document.getElementById("name1").value;
    let name2 = document.getElementById("name").value;
    cars.push(name);
    cars.unshift(name2);
    document.getElementById("demo").innerHTML = cars;
} 
