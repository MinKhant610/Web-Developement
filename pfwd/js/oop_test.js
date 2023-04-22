// Sample Class
class Car {
    color = "Red";
    wheels = 4;
    drive(){
        console.log("This car is driving");
    }
}

let toyota = new Car;
console.log(toyota.wheels);
toyota.drive();

// Access private and public
class Dog{
    #age = 4; // private
    color = "red"

    info(){
        console.log(`This dog age is ${this.#age}`);
        console.log(`It colour is ${this.color}`);
    }
}

let shwe_war = new Dog;
shwe_war.info();

//constructor 
class Animal{
    constructor (name){
       this.name = name;
    }
    run(){
        console.log(`${this.name} is running`);
    }
}

let dog = new Animal("Goat_Kyar")
dog.run();

//inheritance 
class Cat extends Animal{
    bark(){
        console.log(`${this.name}  Milo`);
    }
}

let mi_war = new Cat("Mi War");
mi_war.run();
mi_war.bark();