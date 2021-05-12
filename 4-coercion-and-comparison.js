console.log(Number(null));
// Due to coercion this value will be 0

console.log(null < 1);
// This will give is true as during comparison the null will be coerced to Number value of 0

console.log(null == 0);
// Strangely, this will give a value of false
// Such cases happen for the comparison operator

console.log('' == 0);
// This will return true

// Due to this strange behaviour during comparison, we use the strict equal of === which also checks for the type
