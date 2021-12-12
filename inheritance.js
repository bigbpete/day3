
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



