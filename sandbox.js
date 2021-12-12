// // **CLASS DECLARATION** use the class keyword and the name of the class
// class Dog {
//     constructor (breed, age) {//The constructor method is a special method for creating and initializing an object
//         this.breed = breed;// the constructor can use super keyword for superclass
//         this.age = age;
//     }
// }


// class Dog {}
// const newDog = new Dog();
// console.log(newDog)// => Dog {}

// ***CLASS EXPRESSIONS*** Can be named or unnamed

// Anonymous class stored in 'Dog'
// let Dog = class {
//     constructor(breed, age){
//         this.breed = breed;
//         this.age = age;
//     }
// }
// console.log(Dog.name) // => Dog


// A named class stored in `Dog`
// let Dog = class Dog2 {
//     constructor(breed, age){
//         this.breed = breed;
//         this.age = age;
//     }
// }
// console.log(Dog.name) // => "Dog2"

// ***PRACTICE***
// *** Class Declaration:
// class Plant {
//     constructor (name, heightInInches) {
//         this.name = name;
//         this.heightInInches = heightInInches;
//     }
// }
// const peony = new Plant('peony', 12);
// console.log(peony);// => Plant { name: 'peony', hkeightInInches: 12 }
//************************************************************************** */

//***Expression:
// const Plant = class {
//     constructor (name, heightInInches) {
//         this.name = name;
//         this.heightInInches = heightInInches;
//     }
// }
// const peony = new Plant('peony', 12);
// console.log(peony);// => Plant { name: 'peony', hkeightInInches: 12 }
//************************************************************************** */
// function Car () {
//     this.fuel = 0;
//     this.distance = 0;
// }
// // Prototype changes are live, meaning changes to Car's PT 
// move () {
//     if (this.fuel < 1) {
//         throw new RangeError('Fuel tank is depleted')
//     }
//     this.fuel--
//     this.distance += 2;
// }
// addFuel(){
//     if(this.fuel >= 60) {
//         throw new RangeError('Fuel tank is full')
//     }
//     this.fuel++
// }
// var car = new Car();
// car.addFuel()
// car.move()
// car.move()
//***************************************************** */
// Same Car class but with ES6
// class Car {
//     constructor() {
//         this.fuel = 0;
//         this.distance = 0;
//     }
// // Notice `move()` method is defined w/out PT chaining
// move() {
//     if(this.fuel < 1) {
//         throw new RangeError("Fuel tank is depleted")
//     }
//     this.fuel--
//     this.distance += 2
// }
// // addFuel also w/o PT chaining
// addFuel() {
//     if (this.fuel >= 60) {
//         throw new RangeError("Fuel tank is full")
//     }
//     this.fuel++
// }
// }

// var car = new Car()
// car.addFuel()
// car.move()
// car.move()
// console.log(car.distance,car.fuel)

//***Examples from Learn***

// class Plant {
//     constructor (name, heightInInches) {
//         this.name = name;
//         this.heightInInches = heightInInches;
//     }
// grow(amount) {
    // this.heightInInches += amount;
// }
// };
// const peony = new Plant('peony', 12);
// console.log(peony);// => Plant { name: 'peony', hkeightInInches: 12 }

// class Planet {
//     constructor(name, distance, rings, color) {
//       this.distance = distance;
//       this.rings = rings;
//       this.color = color;
//       this.name = name;
//     }
//     move(miles) {
//     this.distance += miles;
//     }
//   };
//   const saturn = new Planet('Saturn', 22, true, 'blue');
  
//   saturn.move(2000)
//   console.log(saturn)
  
// *****EXERCISE*****CHANGE TO ES6
// REFACTOR THE CAR FUNCTION BELOW...

// class Car {
//     constructor (manufacturer, model, horsepower, timeTo60) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.horsepower = horsepower;
//         this.timeTo60 = timeTo60;
// }
// listSpecs() {
//   return (`This car is a ${this.manufacturer} ${this.model} that produces ${this.horsepower} BHP.`);
// }
// race () {
//   return (`The ${this.manufacturer} ${this.model} went from 0 to 60 mph in ${this.timeTo60} seconds.`)
// }
// tune () {
//   this.horsepower *= 1.25;
//   this.timeTo60 *= 0.80;
// }
// };
//  *****************INSTANCES********************
//********EXAMPLE********* */


// class Building {
//     constructor(floors){
//         this.numberOfFloors = floors;
//         this.hasEmergencyExit = true;
        
//     }
// }
// const myHouse = new Building(2); 
// const empireState = new Building(102); 
// const smithTower = new Building(56); 

// console.log(myHouse.numberOfFloors);
// console.log(myHouse.hasEmergencyExit);
// console.log(empireState.numberOfFloors);
// console.log(empireState.hasEmergencyExit);

// class Building {
//     constructor(numberOfFloors, yearLastInspected) {
//       this.numberOfFloors = numberOfFloors;
//       this.yearLastInspected = yearLastInspected;
//     }
  
//     addFloor() {
//       this.numberOfFloors += 1;
//     }
  
//     needsInspection() {
//       return new Date().getFullYear() - this.yearLastInspected > 10;
//     }
//   }
  
//   const empireState = new Building(102, 2014); // 102 floors inspected in 2014
//   const myHouse = new Building(2, 1986);       // 2 floors inspected in 1986
  
//   console.log(empireState.numberOfFloors);     // 102
//   console.log(myHouse.numberOfFloors);         // 2
  
//   // My House needs to expand another floor
//   myHouse.addFloor();
//   console.log(empireState.numberOfFloors);     // 102 (No Change)
//   console.log(myHouse.numberOfFloors);         // 3
  
//   if (myHouse.needsInspection()) {
//     console.log('My House Needs Inspection');  // Will get printed
//   }

// class Planet {
//     constructor(name, distanceFromTheSun, rings, color) {
//         this.name = name;  
//         this.distanceFromTheSun = distanceFromTheSun;
//         this.rings = rings;
//         this.color = color;
//     }    
//         updateColor(color) {
//             this.color = color;
//         }

//         increaseDistanceFromTheSun(miles) {
//             this.increaseDistanceFromTheSun += miles;
//         }
//     };
// let mars = new Planet("Mars", 1503900000, false, "Red")
// let earth = new Planet("Earth", 931350000, false, "Green and Blue")
// // mars.neighborOfEarth = true;
// // console.log(earth);
// // console.log(mars);
// let saturn = new Planet("Saturn", 83948, true, "Yellow")
// let venus = new Planet("Venus", 84029384293, false, "Blue")
// let pluto = new Planet("pluto", 20823483938, false, "Grey")
// pluto.isCurrentlyConsideredAPlanet = false;
// console.log(pluto)

//*******************EXERCISE************ */

// class Car {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//       this.mileage = 0;
//       this.timeDriven = 0;
//     };
//     drive(miles, timeInHours) {
//       this.mileage += miles;
//       this.timeDriven += timeInHours;
//     };
//     checkIn() {
//       return `The ${this.make} ${this.model} drove for ${this.timeDriven} hours and has ${this.mileage} miles on the odometer.`;
//     };
//   };

//   const car1 = new Car('Toyota', 'Supra');
//   const car2 = new Car('Nissan', 'Skyline');
//   car1.drive(240, 4);
//   car2.drive(120, 2);
//   car1.drive(60, 1);
//   console.log(car2.checkIn());

//**********#2************* */
// class Student {
//     constructor(name, age, subject) {
//       this.name = name;
//       this.age = age;
//       this.subject = subject;
//     };
//     celebrateBirthday() {
//       this.age += 1;
//     };
//     introduceSelf() {
//       console.log(`Hi my name is ${this.name}. I am ${this.age} years old and I study ${this.subject}.`);
//     };
//   };

//   const student1 = new Student('Jim', 21, 'Biology');

//************#3************* */

// class Bird {
//     constructor(type, wingspan) {
//         this.type = type;
//         this.wingspan = wingspan;
//         this.isHungry = true;
//     }
//     eat() {
//         this.isHungry = false;
//     }
// }
// const bird1 = new Bird("sparrow", 1) 
// const bird2 = new Bird("bald eagle", 6) 
// bird2.eat();
// console.log(bird1)
// console.log(bird2)

//INHERITANCE**********************


// class Vehicle {
//     constructor(make, model, numberOfWheels) {
//         this.make = make;
//         this.model = model;
//         this.numberOfWheels = numberOfWheels;
//     }
//     printVehicleInfo(){
//         console.log(`Make: ${this.make}, Model:${this.model}, Number of Wheels: ${this.numberOfWheels}`)
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(make, model, numberOfWheels, twoSeater, offRoadCapable) {
//         super(make, model, numberOfWheels);
//         this.twoSeater = twoSeater;
//         this.offRoadCapable = offRoadCapable;
//     }
//     printVehicleInfo() {
//         console.log(`Make: ${this.make}, Model:${this.model}, Number of Wheels: ${this.numberOfWheels}, Is
//         two-seater: ${this.twoSeater}, Is Offroad Capable: ${this.offRoadCapable},
//          Motorcycle Association: ${this.association}.`);
//     }
//     updateMotorcycleAssociation(association) {
//         this.association = association;
//     }
// }
// let harley = new Motorcycle("Harley Davidson", "Streetglide", 2, false, false);
// // console.log(harley);
// harley.updateMotorcycleAssociation("Son's of Anarchy")
// harley.printVehicleInfo()

//**************BUILDING EXAMPLE EXPANDED*********** */

// class Building {
//     constructor(numberOfFloors, yearLastInspected) {
//       this.numberOfFloors = numberOfFloors;
//       this.yearLastInspected = yearLastInspected;
//       this.specialActionNeeded = false;
//     }
  
//     addFloor() {
//       this.numberOfFloors += 1;
//     }
  
//     needsInspection() {
//       return this.specialActionNeeded || new Date().getFullYear() - this.yearLastInspected > 10;
//     }
//   }
  
//   class Residential extends Building {
//     constructor(numberOfFloors, yearLastInspected, numberOfFamilies) {
//       super(numberOfFloors, yearLastInspected);
//       this.numberOfFamilies = numberOfFamilies;
//     }
  
//     familiesPerFloor() {
//       return this.numberOfFamilies / this.numberOfFloors;
//     }
//   }
  
//   class Office extends Building {
//     constructor(numberOfFloors, yearLastInspected, numberOfOffices) {
//       super(numberOfFloors, yearLastInspected);
//       this.numberOfOffices = numberOfOffices;
//     }
  
//     addFloor() {
//       super.addFloor();
//       this.specialActionNeeded = true;
//     }
  
//     officesPerFloor() {
//       return this.numberOfOffices / this.numberOfFloors;
//     }
//   }
//   const myHouse = new Residential(2, 1986, 4);
// const empireState = new Office(102, 2014, 300);

// console.log(myHouse.numberOfFloors);         // 2
// console.log(myHouse.numberOfFamilies);       // 4
// console.log(myHouse.familiesPerFloor());     // 2
// console.log(myHouse.numberOfOffices);        // undefined

// console.log(empireState.numberOfFloors);     // 102
// console.log(empireState.numberOfOffices);    // 300
// console.log(empireState.officesPerFloor());  // 2.94...
// console.log(empireState.numberOfFamilies);   // undefined
// console.log(empireState.needsInspection());  // false
// console.log(empireState.addFloor());
// console.log(empireState.numberOfFloors);     // 103
// console.log(empireState.needsInspection());  // true
   
//************YOU-DO*********************** */

// class Shape {
//     constructor(name, numberOfSides) {
//         this.name = name;
//         this.numberOfSides = numberOfSides;
//     }
//     printInfo() {
//         console.log(`Name: ${this.name}, Number of Sides: ${this.numberOfSides} `)
//     }
// }
// class Triangle extends Shape {
//     constructor(name, numberOfSides, type) {
//         super(name, numberOfSides);
//         this.type = type;
//     }
//     printInfo() {
//         console.log(`Name: ${this.name}, Number of Sides: ${this.numberOfSides}, Type: ${this.type} `)
//     }
// }
// class Square extends Shape {
//     constructor(name, numberOfSides, sideLength) {
//         super(name, numberOfSides);
//         this.sideLength = sideLength;
//     }
//     printInfo() {
//         console.log(`Name: ${this.name}, Number of Sides: ${this.numberOfSides}, Side Length: ${this.sideLength} `)
//     }
// }
// let shape = new Shape('Octagon', 8)
// let triangle = new Triangle('Triangle', 3, 'Right Triangle')
// let square = new Square('Square', 4, 10)

// console.log(shape)
// console.log(triangle)
// console.log(square)

// *****************EXERCISE**********************

class Car {
    constructor(make, model, horsepower, value) {
      this.make = make;
      this.model = model;
      this.horsepower = horsepower;
      this.value = value;
    };
    depreciate() {
      this.value *= 0.75;
      return this.value;
    };
    listSpecs() {
      return `The ${this.make} ${this.model} generates ${this.horsepower} BHP and costs $${this.value}.`
    };
  };
  
class SportsCar extends Car {
    constructor(make, model, horsepower, value, acceleration) {
        super(make, model, horsepower, value);
        this.acceleration = acceleration;
    };
    listSpecs() {
        return `The ${this.make} ${this.model} generates ${this.horsepower} BHP and costs $${this.value},
        and accelerates from 0 to 60mph in ${this.acceleration} seconds.`
    };
  };


let buick = new Car("Buick", "Skylark", 220, 22000);
let aston = new SportsCar("Aston Martin", "Caviar", 365, 122000, 3.2);




