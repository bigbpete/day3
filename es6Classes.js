//************************************************************************** */
// **CLASS DECLARATION** use the class keyword and the name of the class
class Dog {
    constructor (breed, age) {//The constructor method is a special method for creating and initializing an object
        this.breed = breed;// the constructor can use super keyword for superclass
        this.age = age;
    }
}


class Dog {}
const newDog = new Dog();
console.log(newDog)// => Dog {}

//***CLASS EXPRESSIONS*** Can be named or unnamed

//Anonymous class stored in 'Dog'
let Dog = class {
    constructor(breed, age){
        this.breed = breed;
        this.age = age;
    }
}
console.log(Dog.name) // => Dog


//A named class stored in `Dog`
let Dog = class Dog2 {
    constructor(breed, age){
        this.breed = breed;
        this.age = age;
    }
}
console.log(Dog.name) // => "Dog2"

//***PRACTICE***
// *** Class Declaration:
class Plant {
    constructor (name, heightInInches) {
        this.name = name;
        this.heightInInches = heightInInches;
    }
}
const peony = new Plant('peony', 12);
console.log(peony);// => Plant { name: 'peony', hkeightInInches: 12 }
// ************************************************************************** */

// ***Expression:
const Plant = class {
    constructor (name, heightInInches) {
        this.name = name;
        this.heightInInches = heightInInches;
    }
}
const peony = new Plant('peony', 12);
console.log(peony);// => Plant { name: 'peony', hkeightInInches: 12 }
// ************************************************************************** */
function Car () {
    this.fuel = 0;
    this.distance = 0;
}
// Prototype changes are live, meaning changes to Car's PT 
car.prototype.move = function() {
    if (this.fuel < 1) {
        throw new RangeError('Fuel tank is depleted')
    }
    this.fuel--
    this.distance += 2;
};
car.prototype.addFuel = function() {
    if(this.fuel >= 60) {
        throw new RangeError('Fuel tank is full')
    }
    this.fuel++
};
var car = new Car();
car.addFuel()
car.move()
car.move()
// ***************************************************** */
// Same Car class but with ES6
class Car {
    constructor() {
        this.fuel = 0;
        this.distance = 0;
    }
// Notice `move()` method is defined w/out PT chaining
move() {
    if(this.fuel < 1) {
        throw new RangeError("Fuel tank is depleted")
    }
    this.fuel--
    this.distance += 2
}
// addFuel also w/o PT chaining
addFuel() {
    if (this.fuel >= 60) {
        throw new RangeError("Fuel tank is full")
    }
    this.fuel++
}
}

var car = new Car()
car.addFuel()
car.move()
car.move()
console.log(car.distance,car.fuel)

// ***Examples from Learn***

class Plant {
    constructor (name, heightInInches) {
        this.name = name;
        this.heightInInches = heightInInches;
    }
grow(amount) {
    this.heightInInches += amount;
}
};
const peony = new Plant('peony', 12);
console.log(peony);// => Plant { name: 'peony', hkeightInInches: 12 }
//************************************************** */
class Planet {
    constructor(name, distance, rings, color) {
      this.distance = distance;
      this.rings = rings;
      this.color = color;
      this.name = name;
    }
    move(miles) {
    this.distance += miles;
    }
  };
  const saturn = new Planet('Saturn', 22, true, 'blue');
  
  saturn.move(2000)
  console.log(saturn)
  
// *****EXERCISE*****CHANGE TO ES6
// REFACTOR THE CAR FUNCTION BELOW...

class Car {
    constructor (manufacturer, model, horsepower, timeTo60) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.horsepower = horsepower;
        this.timeTo60 = timeTo60;
}
listSpecs() {
  return (`This car is a ${this.manufacturer} ${this.model} that produces ${this.horsepower} BHP.`);
}
race () {
  return (`The ${this.manufacturer} ${this.model} went from 0 to 60 mph in ${this.timeTo60} seconds.`)
}
tune () {
  this.horsepower *= 1.25;
  this.timeTo60 *= 0.80;
}
};
  

