// Restricting access to instance variables and methods that do not need to be exposed.

// Constructing methods to allow access to those instance variables and methods.

// class Building {
//     #numberOfFloors;
//     #yearLastInspected;
//     constructor(numberOfFloors, yearLastInspected) {
//       this.#numberOfFloors = numberOfFloors;
//       this.#yearLastInspected = yearLastInspected;
//     }
  
//     addFloor() {
//       this.#numberOfFloors += 1;
//     }
  
//     needsInspection() {
//       return new Date().getFullYear() - this.#yearLastInspected > 10;
//     }
//   }
  
//   const empireState = new Building(102, 2014);
//   console.log(empireState.#numberOfFloors);// => error

  // to access use getters and setters

//   class Building {
//     #numberOfFloors;
//     #yearLastInspected;
//     constructor(numberOfFloors, yearLastInspected) {
//       this.#numberOfFloors = numberOfFloors;
//       this.#yearLastInspected = yearLastInspected;
//     }
  
//     getNumberOfFloors() {
//       return this.#numberOfFloors;
//     }
  
//     getYearLastInspected() {
//       return this.#yearLastInspected;
//     }
  
//     setYearLastInspected(newValue) {
//       this.#yearLastInspected = newValue;
//     }
  
//     addFloor() {
//       this.#numberOfFloors += 1;
//     }
  
//     needsInspection() {
//       return new Date().getFullYear() - this.#yearLastInspected > 10;
//     }
//   }
  
//   const empireState = new Building(102, 2014);         // 102 floors inspected in 2014
//   console.log(empireState.getNumberOfFloors());        // 102
//   console.log(empireState.getYearLastInspected());     // 2014
//   empireState.setYearLastInspected(2016);
//   console.log(empireState.getYearLastInspected());     // 2016

//   // The ES6 version:

//   class Building {
//     #numberOfFloors;
//     #yearLastInspected;
//     constructor(numberOfFloors, yearLastInspected) {
//       this.#numberOfFloors = numberOfFloors;
//       this.#yearLastInspected = yearLastInspected;
//     }
  
//     get numberOfFloors() {
//       return this.#numberOfFloors;
//     }
  
//     get yearLastInspected() {
//       return this.#yearLastInspected;
//     }
  
//     set yearLastInspected(newValue) {
//       this.#yearLastInspected = newValue;
//     }
  
//     addFloor() {
//       this.#numberOfFloors += 1;
//     }
  
//     needsInspection() {
//       return new Date().getFullYear() - this.#yearLastInspected > 10;
//     }
//   }
  
//   const empireState = new Building(102, 2014);  // 102 floors inspected in 2014
//   console.log(empireState.numberOfFloors);       // 102
//   console.log(empireState.yearLastInspected);    // 2014
//   empireState.yearLastInspected = 2016;
//   console.log(empireState.yearLastInspected); // 2016

  // Guided Video #1 ****************************

//   class Plane {
//     #numberOfSeats  
//     #numberOfDoors
//     #numberOfFlightsFlown
//     constructor(numberOfSeats, maxSpeed, yearBuilt, numberOfDoors, numberOfFlightsFlown,
//         pilot) {
//           this.#numberOfSeats = numberOfSeats;
//           this.maxSpeed = maxSpeed;
//           this.yearBuilt = yearBuilt;
//           this.#numberOfDoors = numberOfDoors;
//           this.#numberOfFlightsFlown = numberOfFlightsFlown;
//           this.pilot = pilot;
//       }
//       set numberOfDoors(newDoors) {
//           this.#numberOfDoors = newDoors;
//       }
//       set numberOfFlightsFlown(newFlight) {
//           this.#numberOfFlightsFlown = newFlight;
//       }
//       set numberOfSeats(newValue) {
//           this.#numberOfSeats = newValue
//       }
//       get numberOfSeats() {
//           return this.#numberOfSeats;
//       }
//       get numberOfDoors() {
//           return this.#numberOfDoors;
//       }
//       get numberOfFlightsFlown() {
//           return this.#numberOfFlightsFlown;
//       }
//   }
//   let plane = new Plane(100, 500, 2010);
//   plane.numberOfFlightsFlown = 4000
//   console.log(plane);

