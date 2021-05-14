function first() {
  console.log(this);
}

first();

function second() {
  console.log(this);

  function secondChild() {
    console.log(this);
  }
  secondChild();
}

second();

// When functions are invoked, regardless of their execution context, 'this' keyword points to the window object
// Even the secondChild function created inside 'second' points to the window object

let testObj = {
  name: 'This is a test object',
  log: function () {
    console.log(this.name);
    // For any method (inside object functions are called methods) inside an object, 'this' keyword points to the object itself

    // Strangely, for function declared inside the method, 'this' will point to the global object
    // So instead of updating the name for the object, it will create a 'name' variable in the window (global) object
    let updateName = function (name) {
      this.name = name;
    };

    updateName('Name has been updated');
    console.log(this);
  },
};

testObj.log();

// The solution for this case is the create a 'self' variable inside the method which will be assigned as 'this'

let testObjNew = {
  name: 'This is a new test object',
  log: function () {
    let self = this;
    // self now references to the object
    // And now we use self instead of 'this' when required

    console.log(self);

    let updateNameNew = function (name) {
      self.name = name;
    };

    updateNameNew('Name has been updated');
    console.log(self);
  },
};

testObjNew.log();
