//  *****************INSTANCES********************
//********EXAMPLE********* */


class Building {
    constructor(floors){
        this.numberOfFloors = floors;
        this.hasEmergencyExit = true;
        
    }
}
const myHouse = new Building(2); 
const empireState = new Building(102); 
const smithTower = new Building(56); 

console.log(myHouse.numberOfFloors);
console.log(myHouse.hasEmergencyExit);
console.log(empireState.numberOfFloors);
console.log(empireState.hasEmergencyExit);

class Building {
    constructor(numberOfFloors, yearLastInspected) {
      this.numberOfFloors = numberOfFloors;
      this.yearLastInspected = yearLastInspected;
    }
  
    addFloor() {
      this.numberOfFloors += 1;
    }
  
    needsInspection() {
      return new Date().getFullYear() - this.yearLastInspected > 10;
    }
  }
  
  const empireState = new Building(102, 2014); // 102 floors inspected in 2014
  const myHouse = new Building(2, 1986);       // 2 floors inspected in 1986
  
  console.log(empireState.numberOfFloors);     // 102
  console.log(myHouse.numberOfFloors);         // 2
  
  // My House needs to expand another floor
  myHouse.addFloor();
  console.log(empireState.numberOfFloors);     // 102 (No Change)
  console.log(myHouse.numberOfFloors);         // 3
  
  if (myHouse.needsInspection()) {
    console.log('My House Needs Inspection');  // Will get printed
  }
//*********************************************************** */

class Planet {
    constructor(name, distanceFromTheSun, rings, color) {
        this.name = name;  
        this.distanceFromTheSun = distanceFromTheSun;
        this.rings = rings;
        this.color = color;
    }    
        updateColor(color) {
            this.color = color;
        }

        increaseDistanceFromTheSun(miles) {
            this.increaseDistanceFromTheSun += miles;
        }
    };
let mars = new Planet("Mars", 1503900000, false, "Red")
let earth = new Planet("Earth", 931350000, false, "Green and Blue")
// mars.neighborOfEarth = true;
// console.log(earth);
// console.log(mars);
let saturn = new Planet("Saturn", 83948, true, "Yellow")
let venus = new Planet("Venus", 84029384293, false, "Blue")
let pluto = new Planet("pluto", 20823483938, false, "Grey")
pluto.isCurrentlyConsideredAPlanet = false;
console.log(pluto)

//*******************EXERCISE************ */

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.mileage = 0;
      this.timeDriven = 0;
    };
    drive(miles, timeInHours) {
      this.mileage += miles;
      this.timeDriven += timeInHours;
    };
    checkIn() {
      return `The ${this.make} ${this.model} drove for ${this.timeDriven} hours and has ${this.mileage} miles on the odometer.`;
    };
  };

  const car1 = new Car('Toyota', 'Supra');
  const car2 = new Car('Nissan', 'Skyline');
  car1.drive(240, 4);
  car2.drive(120, 2);
  car1.drive(60, 1);
  console.log(car2.checkIn());

// **********#2************* */
class Student {
    constructor(name, age, subject) {
      this.name = name;
      this.age = age;
      this.subject = subject;
    };
    celebrateBirthday() {
      this.age += 1;
    };
    introduceSelf() {
      console.log(`Hi my name is ${this.name}. I am ${this.age} years old and I study ${this.subject}.`);
    };
  };

  const student1 = new Student('Jim', 21, 'Biology');

//************#3************* */

class Bird {
    constructor(type, wingspan) {
        this.type = type;
        this.wingspan = wingspan;
        this.isHungry = true;
    }
    eat() {
        this.isHungry = false;
    }
}
const bird1 = new Bird("sparrow", 1) 
const bird2 = new Bird("bald eagle", 6) 
bird2.eat();
console.log(bird1)
console.log(bird2)