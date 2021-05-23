function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var functions = buildFunctions();

functions[0]();
functions[1]();
functions[2]();

// During the execution context of each of these functions, the variable i in the log has not been defined
// So the function will look outside the scope chain
// Inside the execution context of buildFunctions, the value of i in memory is 3
// So the output of all the functions will be 3

function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    let j = i;
    arr.push(function () {
      console.log(j);
    });
  }

  return arr;
}

var functions = buildFunctions2();

functions[0]();
functions[1]();
functions[2]();

// To work around this we can use the ES6 let variable because it will scope the variable to that for loop
// So during the execution context of each for loop will create a new variable in memory
// And the functions will have access to a different variable

function buildFunctions3() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var functions = buildFunctions2();

functions[0]();
functions[1]();
functions[2]();

// A different way using the var keyword is to create a IIFE inside the array push which will have a variable j
// We will pass the loop variable i to that function and return the console log function inside the IIFE
// So during the array push, the IIFE will create a execution context and the log function will have access to the variable j
// j is now available in the execution of the IIFE
