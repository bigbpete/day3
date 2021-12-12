
// class User {
//     static staticPrinter() {
//         console.log("Static method has been called!")
//     }
// }
// User.staticPrinter()

// class Animal {
//     constructor(name, age, species) {
//         this.name = name;
//         this.species = species;
//         this.age = age;
//     }
//     static staticPrinter() {
//         console.log("This is an animal!")
//     }
// }
// class Giraffe extends Animal {
//     constructor(name, age, species, neckHeight) {
//         super(name, age, species);
//         this.neckHeight = neckHeight;
//     }
//     static staticGiraffePrinter() {
//         console.log("This is a giraffe!")
//     }
// }
// // Invoke static printers
// Animal.staticPrinter();
// Giraffe.staticPrinter();
// Giraffe.staticGiraffePrinter();

//******************************************************* */

// class ClassWithStaticMethod {
//     static staticMethod() {
//       return 'Static method has been called.';
//     }
//   }
  
//   console.log(ClassWithStaticMethod.staticMethod()); 

  //******************************************************* */

  class StaticMethodCall {
    static staticMethod() {
      return 'Static method has been called';
    }
    static anotherStaticMethod() {
      return this.staticMethod() + ' from another static method';
    }
  }
  StaticMethodCall.anotherStaticMethod(); 


