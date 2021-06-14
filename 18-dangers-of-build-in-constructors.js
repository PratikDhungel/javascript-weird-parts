let a = 7;
let b = new Number(7);

// This will return true due to coercion of the ==
console.log(a == b);

// This will return false as a is number and b is an object
console.log(a === b);
