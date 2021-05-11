function funcB() {
  var myVar;
  console.log('funcB ', myVar);
}

function funcA() {
  var myVar = 2;
  console.log('funcA ', myVar);
  funcB();
}

var myVar = 1;
console.log('global', myVar);
funcA();
console.log('global again', myVar);

// Each variable is inside it's own execution context so each one is different
