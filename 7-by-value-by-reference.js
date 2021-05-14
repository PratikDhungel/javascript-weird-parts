let a = 1;
let b = a;
// Here we are passing by value so it creates a new space in memory for the variable b

b = 2;

console.log(a);
console.log(b);

let originalName = { firstName: 'Daniel', lastName: 'Plainview' };
let newName = originalName;
// Objects are passed by reference so they point to the same memory location
// ANy changes made to the new object will also change the original object

newName.middleName = 'H.';

console.log(originalName);
console.log(newName);

// Even when objects are passed as arguments in functions, they are passed by reference
const addNickname = (obj) => {
  obj.nickName = 'Mr Daniel';
};

addNickname(originalName);

console.log(originalName);
console.log(newName);

// Since functions are also passed as reference, they exhibit the same behavior
function originalFunc() {
  console.log('Hello... Mr Daniel');
}

let newFunc = originalFunc;

newFunc = function () {
  console.log('Mr Daniel??');
};

console.log(originalFunc);
console.log(newFunc);
