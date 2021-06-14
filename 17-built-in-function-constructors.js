// Creating a variable using the built in function constructor
let a = new String('Hello World!');

// We can add a new feature/method to the sting prototype such that the variable can access that method
String.prototype.lengthGreaterThan = function (length) {
  return this.length > length;
};

console.log(a.lengthGreaterThan(3));

Number.prototype.isPositive = function () {
  return this > 0;
};

let number = 3;
console.log(number.isPositive());

Boolean.prototype.getOpposite = function () {
  return !this;
};

let bool = new Boolean(true);

console.log(bool.getOpposite());
