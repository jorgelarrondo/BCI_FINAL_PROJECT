let car = new Object();

car.manufacturer = "Mercedes Benz";

car.model = "E";

car.type = "Sedan";

let anotherCar = {

manufacturer: "Audi",

model: "A4",

type: "Estate"

};

let vehicle = {

    capacity: 5,
    
    tireCount: 6,
    
    type: 'Truck'
    
    };

console.log(vehicle.type);

for(let x in vehicle){
    console.log(x + ' - ' + vehicle[x]);
}