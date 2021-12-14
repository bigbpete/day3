//In JavaScript, objects can store any data type, including functions. If a function in an object 
// needs to operate on a property of that object, it could look like this:

// let person = {
//   name:'Jack Bauer',
//   printName: function(){
//     console.log(person.name) // reference to the 'person' object
//   }
// }

// person.printName() // prints 'Jack Bauer'

// let human = person;
// person = {}
// human.printName();

// The this keyword fixes this dependency by creating an internal structure that is independent
//  of an objects name.

// let person = {
//     name:'Jack Bauer',
//      printName: function(){
//       console.log(this.name)
//     }
//   }
  
//   person.printName()   // prints 'Jack Bauer'
  
//   let human = person;  // set `human` to reference `person`
//   person = {}          // set `person` to reference a new object.
//   human.printName();   // prints 'Jack Bauer'

//   var fun = () => {
//     log(this)
// }

// log(this); //GLOBAL REFERENCE => `this` is bound to the global object (which is `windows` in a browser)

// fun(); // FREE FUNCTION INVOCATION => `this` is bound to the global object (which is `windows` in a browser)

// fun.call(obj); // .call or .apply() INVOCATION => `this` is bound to the first argument to .call() or .apply()

// fun.apply(obj); // .call or .apply() INVOCATION => `this` is bound to the first argument to .call() or .apply()

// new fun() // CONSTRUCTION MODE => `this` is bound to a new object created for that invocation

// //make a fun method
// var obj = { method: fun };

// obj.method() // METHOD INVOCATION => `this` is bound to the object on the left of the CALL TIME dot

// // ONE LINER: the object to the left of the . at function invocation is what `this` is bound to.

// {
//     const person = {
//         firstName: "Jerry",
//         lastName: "Garcia",
//         fullname: function() {
//             return this.firstName + " " + this.lastName
//         }
//     }
//     console.log(person.fullname());// => Jerry Garcia
//     }
//----------------------------------------------------
// const bob = {
//     name: "Bob Wier",
//     greet: function() {
//         return "Hi, I am " + this.name
//     }
// }

// const jerry = {
//     name: "Jerry Seinfeld",
//     greet: bob.greet
// }

// const result = jerry.greet()
// console.log(result)
//----------------------------------------------
// var x = 10;

// var puzzle = function (amount) {
//   this.x += amount;
// };

// var alice = { x: 10, f: puzzle };

// puzzle(5);
// alice.f(5);
// alice.g = alice.f;
// alice.g(5);

// var result = alice.x;
// console.log(result);
//-------------------------------------------
// window.name = 'window'

// var alice = {
//   name: 'Alice',
//   greet: function () {
//     return "Hi I am " + this.name
//   }
// }

// var bob = {
//   name: 'Bob',
//   greet: alice.greet
// }

// var result = alice.greet()
//-------------------------------------------
// var number = 1789;

// function sayNumber(msg) {
//   console.log(this.number);
// }

// sayNumber.number = 1815;

// let valjean = {
//   number: 24601,
//   whoAmI: sayNumber
// }

// console.log(valjean.whoAmI());

//-----------------------------------------

// var number = 1789;

// function sayNumber() {
//   console.log(this.number);
// }

// sayNumber.number = 1815;

// let valjean = {
//   number: 24601,
//   whoAmI: sayNumber
// }

// sayNumber.call(sayNumber);
//--------------------------------------------
/*Given the following employees object and the various employees that get added,
 refactor the code to utilize the helper functions raiseSalary and promote. Add
 methods to each object in the employees object named raiseSalary and promote.
 These methods' values should reference the helper functions. The raiseSalary method
 should accept the total raise amount the employee is receiving, and the promote method
 should take in the employee's new title. The helper functions should not reference
 objects directly by name but should utilize the this keyword to promote or raise the
 salary of the various employees.The "raiseSalary" method should accept the total raise 
 amount the employee is receiving as a parameter, and the "promote" method should take
in the employee's new title.*/


function raiseSalary() {
    this.salary+= amount//your code here
  };
  
function promote() {
    this.jobTitle = newTitle//your code here
    };
  
  const employees = {};
  employees.bob = {
    salary: 60000,
    jobTitle: 'sales rep',
    promote: promote(),
  };
  employees.sarah = {
    salary: 80000,
    jobTitle: 'sales supervisor',
  }
  employees.alex = {
    salary: 100000,
    jobTitle: 'sales director'
  }

 
console.log(employees.bob.promote('sales'));