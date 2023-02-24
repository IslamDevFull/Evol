





















//     1) Xususiyat

        // class Car {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        // }


        // const myCar = new Car ("Nexia", 2010);

        // document.getElementById("demo").innerHTML = myCar.name + " " + myCar.age;






        // 2) Xususiyat

        // class Car {
        //     constructor(name, age){
        //         this.carName = name;
        //         this.carAge = age;
        //     }
        // }


        // const myCar = new Car ("Nexia", 2010);

        // document.getElementById("demo").innerHTML = myCar.carName + " " + myCar.carAge;







    //  3) metot

        // class Car {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //     color(){
        //         let color = "Sariq";
        //         return color;
        //     }
        // }

        // const myCar = new Car ("Nexia", 2010);

        // document.getElementById("demo").innerHTML ="mening moshinim " + myCar.name + " yili " + myCar.age + " rangi " + myCar.color();




    //  4) metot marametr
        
        // class Car {
        //     constructor(name, age, color){
        //         this.name = name;
        //         this.age = age;
        //         this.color = color
        //     }
        //     carColor(x){
        //         return x
        //     }
        // }

        // let nameColor = "Kulrang";

        // const myCar = new Car ("Nexia", 2010, "sariq");

        // document.getElementById("demo").innerHTML ="mening moshinim " + myCar.name + " yili " + myCar.age + " rangi " + myCar.carColor(nameColor);





    //  5) Vazifacha

        // class Car {
        //     constructor(name, age, color){
        //         this.name = name;
        //         this.age = age;
        //         this.color = color
        //     }
        //     carColor(x){
        //         return this.color + " edi keyin " + x + " bo'ldi ";
        //     }
        // }

        // let nameColor = "Kulrang";

        // const myCar = new Car ("Nexia ", 2010, " sariq ");

        // document.getElementById("demo").innerHTML = myCar.name + myCar.age + myCar.carColor(nameColor);



    // 6) Qaytarilish

        // class Car{
        //     constructor(name, color){
        //         this.carName = name;
        //         this.carColor = color;
        //     }
        //     fullCar(){
        //        return " Mening mashinam " + this.carName + " rangi " + this.carColor;
        //     }
        // }
        
        // class Age extends Car{
        //     constructor(name, color, age){
        //         super(name, color);
        //         this.carAge = age;
        //     }
        //     show(){
        //         return this.fullCar() + " yili esa " + this.carAge;
        //     }
        // }
        
        // const myCar = new Age("Nexia", "Sariq", 2010)
        
        // document.getElementById("demo").innerHTML = myCar.show();






    //  7) Vazifa 

        // const worker = new Worker('Feruz', 'Fayzulloyev', 10, 31);

        // console.log(worker.name); // 'Feruz'
        // console.log(worker.surname); // 'Fayzulloyev'
        // console.log(worker.getFullName()); // 'Fayzulloyev Feruz'
        // console.log(worker.rate); // 10
        // console.log(worker.days); // 31
        // console.log(worker.getSalary()); //oyligi  310  (10*31)
        
        
        
        
        //  8) Vazifa 
    
            // const boss = new Boss('Feruz', 'Fayzulloyev', 10, 31);
    
            // console.log(boss.name); // 'Feruz'
            // console.log(boss.surname); // 'Fayzulloyev'
            // console.log(boss.getFullName()); // 'Fayzulloyev Feruz'
            // console.log(boss.rate); // 10
            // console.log(boss.days); // 31
            // console.log(boss.workers); // 10
            // console.log(boss.getSalary()); //oyligi  310  (10*31)







        // 9) Metot vazifa
        
        // class Car {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //     year(){
        //         let date = new Date();
        //         return date.getFullYear() - this.age;
        //     }
        // }


        // const myCar = new Car ("Nexia", 2010);

        // document.getElementById("demo").innerHTML ="mening moshinim " + myCar.name + " uning yoshi " + myCar.year() + " yil o'tgan";
        
        
        
        
        
        
        
        
        // 10) Metot parametr vazifa
        

        // class Car {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //     year(x){
        //         return x - this.age
        //     }
        // }
        // let date = new Date();
        // let year = date.getFullYear();


        // const myCar = new Car ("Nexia", 2010);

        // document.getElementById("demo").innerHTML ="mening moshinim " + myCar.name + " uning yoshi " + myCar.year(year) + " yil o'tgan";
