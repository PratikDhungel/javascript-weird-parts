// Immediately Invoked Function Expression

let greeting = (function (name) {
  return 'Hello ' + name;
})('John');

// This function is immediately invoked as we have the parenthesis after the function expression
// The 'greeting' variable will now have the return value of the function instead of the function object

console.log(greeting);

(function (name) {
  console.log('Hello', name);
})('John');

// Anything inside () will be regarded as expressions
// So when we surround a function expression with () we are creating a function expression
// Then we immediately invoke the function using () and passing a value
