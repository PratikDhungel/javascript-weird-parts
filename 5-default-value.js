function greet(name) {
  name = name || 'John Doe';
  // The property of the OR operator is that it returns the first true value while comparing two values
  // So if name exits, it is the first true value (lef to right associativity)
  // If name does not exist (value is false), it assigns to John Doe
  console.log('Hello', name);
}

greet('Daniel');
greet();
