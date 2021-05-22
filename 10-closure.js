function greet(greetingType) {
  return function (name) {
    console.log(greetingType, name);
  };
}

// Although the execution context of the greet function has already ended the greetingType variable is still in the memory
// When the second function is executed, it looks up to scope chain to find the greetingType variable

// So the execution context of the second variable has closed in it's outer variables
// This phenomenon of closing in the variables it should have access to is called Closure

greet('Hello')('Daniel');
