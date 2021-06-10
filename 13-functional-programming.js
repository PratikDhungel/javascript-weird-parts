// This function will map each item through the array and execute the action defined in the function 'fn'
const mapForEach = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
};

let defaultArray = [1, 2, 3, 4];

let arrayOne = mapForEach(defaultArray, (item) => item * 2);

// console.log(arrayOne);

let arrayTwo = mapForEach(defaultArray, (item) => item > 2);

// console.log(arrayTwo);

// The 'fn' in the map function accepts only one argument
// If we want to pass in a function that accepts two arguments then we can use bind
const checkLimit = (limit, item) => {
  return item > limit;
};

let arrayThree = mapForEach(defaultArray, checkLimit.bind(this, 1));
// PS Using bind with arrow functions won't change 'this'

console.log(arrayThree);

// More simpler solution where we don't have to use bind every time
const checkLimitNew = (limit) => {
  return (item) => {
    return item > limit;
  };
};

let arrayFour = mapForEach(defaultArray, checkLimitNew(2));

console.log(arrayFour);
