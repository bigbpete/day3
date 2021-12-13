// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     eat() {
//         console.log(`The ${this.name} eats food.`)
//     }
// };

// const dog = new Animal('Rufus')
// dog.eat();

// class Wolf extends Animal {
//     eat() {
//         console.log(`${this.name} eats meat.`)
//     }
// };

// const wolf = new Wolf('Ted');
// wolf.eat();

// class Elephant extends Animal {
//     // eat() {
//     //     console.log(`${this.name} eats peanuts.`)
//     }
// //}
// const dumbo = new Elephant('Dumbo');

// dumbo.eat();

// class Dolphin extends Animal {
//     eat() {
//         console.log(`${this.name} eats under \'da sea!`)
//     }
//     sleeps() {
//         console.log(`${this.name} sleeps alone.`)
//     }
// };
// const dolly = new Dolphin('Dolly');

// dolly.eat()
// dolly.sleeps()

//______________________BUILDING_____________________

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

//   const tallestBuilding = function(buildings) {
//     if (buildings.length === 0) {
//       return null;
//     }
  
//     // Assume the tallest building is the first building
//     let tallest = buildings[0];
  
//     for (let i = 1; i < buildings.length; i++) {
//       if (buildings[i].numberOfFloors > tallest.numberOfFloors) {
//         tallest = buildings[i];
//       }
//     }
//     return tallest;
//   };

//   const generateInspectionList = function(buildings) {
//     return buildings.filter((bldg) => {
//       return bldg.needsInspection();
//     });
//   }
// const myHouse = new Residential(2, 1986, 4);
// const empireState = new Office(102, 2014, 300);
// const spaceNeedle = new Building(3, 1958);

// const tallest = tallestBuilding([myHouse, empireState, spaceNeedle]);
// console.log(tallest.numberOfFloors); // 102
// console.log(tallest);                // Office object

// const list = generateInspectionList([myHouse, empireState, spaceNeedle]);
// console.log(list.length); // 2
// console.log(list);        // [Residential, Building]

// ____________________HANDS ON________________________

// class Car {
//     constructor(make, model, year, mileage) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.mileage = mileage;
//     }
//     move(miles) {
//         // increases mileage of car by a certain amt
//         this.mileage+= (miles)
//     }
// }
// const mustang = new Car('Ford', 'Mustang', 2022, 3);
// mustang.move(63)
// console.log(mustang)

// class Hybrid extends Car {
//     constructor(make, model, year, mileage) {
//         super(make, model, year, mileage)
//     }
//     move(miles) {
//         this.mileage+= (miles * .40)
//     }
//     }
// const prius = new Hybrid('Toyota', 'Prius Max', 2021, 2_000);
// prius.move(1000)
// console.group(prius)





// ____________________PROBLEM 2________________________

class Watch {
    constructor(brand, value, movement) {
      this.brand = brand;
      this.value = value;
      this.movement = movement;
    }
  }
  class LuxuryWatch extends Watch {
    constructor(brand, value, movement, materials) {
      super(brand, value, movement);
      this.materials = materials;
    }
  }
  class SmartWatch extends Watch {
    constructor(brand, value, movement, operatingSystem) {
      super(brand, value, movement);
      this.operatingSystem = operatingSystem;
    }
  }
  function findMostExpensiveWatch(watches) {
    //YOUR CODE HERE
    let mostExpensive = watches[0];
    for(let i = 1; i < watches.length; i++){
        if(watches[i].value > mostExpensive.value){
            mostExpensive = watches[i];
        }
    }
    return mostExpensive;
  }
  
  const watch1 = new SmartWatch('Apple', 500, 'digital', 'watchOS');
  const watch2 = new SmartWatch('Samsung', 450, 'digital', 'wearOS');
  const watch3 = new LuxuryWatch('Rolex', 25000, 'automatic', ['white gold','platinum'])
  const watch4 = new LuxuryWatch('Audemars Piguet', 40000, 'automatic', ['platinum', 'diamonds'])
  const watches = [watch1, watch2, watch3, watch4]
//   console.log(watches)
console.log(findMostExpensiveWatch(watches));
// console.log(watches[0].value)
 