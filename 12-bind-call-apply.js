var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

var logName = function () {
  console.log(this.getFullName());
};

// The bind method will take in a object and assign that object as 'this' variable for the new function
// So the function that is returned will have 'this' equal to the person object
var logPersonName = logName.bind(person);
logPersonName();

var displayArgsWithName = function (arg1, arg2) {
  console.log(this.getFullName());
  console.log(arg1, arg2);
  console.log('-------------');
};

// The call will invoke the function as the regular invoke but we can also send the 'this' keyword value
// Rest of the parameters can be passed as usual
displayArgsWithName.call(person, 'argument 1', 'argument 2');

// The apply method does the same thing as the call method but here we pass the arguments in an array
displayArgsWithName.apply(person, ['argument 1', 'argument 2']);

//
//
// USE OF APPLY AND CALL
// Function borrowing

var person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
};

// Since person2 is similar to person but does not have the getFullName method, we can borrow it using call or apply
console.log(person.getFullName.call(person2));

//
//
// USE OF BIND
// Function currying

function multiply(a, b) {
  return a * b;
}

// We cna create the copy of the function but with some preset parameters
// In this case the argument a will always be 2
// So we invoke the function with single paramter b
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

// Multiple copies of that function can be made similarly
