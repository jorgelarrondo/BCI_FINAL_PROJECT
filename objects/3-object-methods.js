function AnotherAnimal(type)
    {
        this.type = type;
        this.printWhoAmI = function() {
            console.log(this.type);
        }
    }


function anotherCar(brand, registration)
    {
        this.brand = brand;
        this.registration = registration;
        this.speed = 0;
        this.increaseSpeed = function() {
            this.speed = this.speed + 5;
        }
        this.displaySpeed = function() {
            console.log(this.registration);
            console.log(this.speed);
        }
    }    
let dog = new AnotherAnimal('Dog');
let bird = new AnotherAnimal('Bird');

let volvo = new anotherCar('Volvo', 'ABC-123');
volvo.displaySpeed();
volvo.increaseSpeed();
volvo.displaySpeed();
