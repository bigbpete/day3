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
function raiseSalary() {
    this.salary+= 20000//your code here
  };
  
  function promote() {
    //your code here
  };
  
  const employees = {};
  employees.bob = {
    salary: 60000,
    jobTitle: 'sales rep'
  };
  employees.sarah = {
    salary: 80000,
    jobTitle: 'sales supervisor'
  }
  employees.alex = {
    salary: 100000,
    jobTitle: 'sales director'
  }

