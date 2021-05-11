displayMessage();
// The function will still be called as memory spaces are created for variables and functions during Creation phase of Execution context
console.log(a);
// During the execution phase value of a is undefined (initialized later)
// But there is no error due to hoisting

var a = 'hello world';

function displayMessage() {
  console.log('Inside function');
}
