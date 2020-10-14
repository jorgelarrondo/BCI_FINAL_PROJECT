
function Animal(type, speed, isCute){
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
    this.creationTime = new Date();

}

function Car(brand, model){
    this.brand = brand;
    this.model = model;

}

let audi = new Car('Audi', 'A4');
let mercedes = new Car('Merc', 'E');


let alligator = new Animal('Alligator', 3, false);
let dog = new Animal('Dog', 8, true);

console.log(alligator);
console.log(dog);
console.log(audi);
console.log(mercedes);