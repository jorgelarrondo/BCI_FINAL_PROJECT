class Food {
    constructor(type, quantity)
    {
    this.type = type;
    this.quantity = quantity; 
    }
    whatIsThis()
    { 
    console.log("This food is: " + this.type);
    }
    eatOne(){

        if(this.quantity >= 1){
            this.quantity = this.quantity - 1;
            console.log("Slurp! One " + this.type + " eaten. " + this.quantity + " remaining.");
            
        }else{
        console.log("Sorry, no more " + this.type + "s" + " " +  "remaining.");
        }
    }
    }
class Refrigerator{
    constructor(){
       this.store = []; 
    }
    putFood(food){
        this.store.push(food);
    }
    getAndEatFood(foodName){
        let foundFoodIndex = this.store.findIndex(function(element, index, array) {
            if(element.type == foodName){
                return true;
            } else{
                return false;
            }
        })
    if(foundFoodIndex !== -1){
       this.store[foundFoodIndex].eatOne();
       if(this.store[foundFoodIndex].quantity === 0){
           this.store.splice(foundFoodIndex, 1);

       }
    }else{
        console.log('Sorry, no such food in this refrigerator!');
    }
    }


    getContents(){
        console.log('--------- ');
        for(let i = 0; i < this.store.length; i++){
        console.log('| ' + this.store[i].type + ' ' + this.store[i].quantity);
        }
        console.log('--------- ');

        
    }
}
    let banana = new Food('banana', 4);
    banana.whatIsThis();
    banana.eatOne();
    banana.eatOne();
    banana.eatOne();
    banana.eatOne();
    banana.eatOne();

    let r = new Refrigerator();
    let apple = new Food('Apple', 2);
    let bananas = new Food('Banana', 3);
    r.putFood(apple);
    r.putFood(bananas);
    r.getContents();
    r.getAndEatFood('Apple');
    r.getAndEatFood('Apple');
    r.getAndEatFood('Banana');
    r.getAndEatFood('Apple');
    r.getContents();