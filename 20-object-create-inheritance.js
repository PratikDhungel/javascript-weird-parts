// let person = {
//   firstName: 'Default',
//   lastName: 'Default',
//   greet: function () {
//     return 'Hello ' + this.firstName;
//   },
// };

// // This will create an empty object with the prototype set to the object passed in
// // So the __proto__ of 'john' object will have 'person'
// let john = Object.create(person);

// // We can assign values to the new object and we can still have the greet method
// john.firstName = 'John';
// john.lastName = 'Doe';
// console.log(john);
// console.log(john.greet());

// Extra...
// Creating a polyfill for the Object.create method

if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create only accepts one argument');
    }

    function F() {}
    F.prototype = o;
    return new F();
  };
}
