// All objects in JS have a property called proto
// When we access the properties inside proto, we can use to __proto__ or reference the property itself
// E.g. arr.map will access the map property in __proto__
// If we try to access the property of an object which does not exist (in itself)
// It will look down the prototype chain to find the property

let defaultPerson = {
  firstName: 'Default',
  lastName: 'Default',
  showFullName: function () {
    console.log(this.firstName, this.lastName);
  },
};

let personOne = {
  firstName: 'John',
  lastName: 'Doe',
};

// This is something that should not be used...
personOne.__proto__ = defaultPerson;

// Will look in the __proto__ to find the method and invoke it
personOne.showFullName();

let personTwo = {
  firstName: 'Jane',
};

personTwo.__proto__ = defaultPerson;

// Since personTwo has no last name it will access the lastName inside __proto__ i.e. 'Default'
personTwo.showFullName();
