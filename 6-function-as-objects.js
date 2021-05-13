function sayHello(name) {
  console.log('Hello', name);
}

sayHello('Little Friend');

sayHello.movieName = 'Scarface';

console.log(sayHello.movieName);
console.log(sayHello);
// This is legit because functions in JS are objects

// JS has first class functions meaning we can act on them like we act on other types
