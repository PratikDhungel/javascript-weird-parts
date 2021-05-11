function funcB() {
  console.log('funcB ', myVar);
}

// funcB will log 1 because the lexical environment of the function in the global level
// If funcB was declared inside the execution context of function A
// then the value would have been the value that was declared in function A

function funcA() {
  var myVar = 2;
  console.log('funcA', myVar);
  funcB();
}

var myVar = 1;
console.log('global', myVar);

funcA();
