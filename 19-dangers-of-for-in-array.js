Array.prototype.randomFeature = 'random';

const newArr = ['hello', 'world'];

// Whenever a new feature is added to the Array prototype, it is added to the array object as well
// So when we use for...in to loop arrays the iterator 'item' will also access the new prototype function
// This is because randomFeature is enumerable as it is created through assignment

for (let item in newArr) {
  console.log(item, newArr[item]);
}

// Output is
// 0 hello
// 1 world
// randomFeature random

// If we define a new property using defineProperty, it is not enumerable
// So it won't appear in the for...in loop for an array
Object.defineProperty(Array.prototype, 'newRandom', { value: 'New random' });

const secondArr = ['hello', 'world'];

for (let item in newArr) {
  console.log(item, newArr[item]);
}

// Output is still
// 0 hello
// 1 world
// randomFeature random

// It is better to use the for... loop in case of arrays
