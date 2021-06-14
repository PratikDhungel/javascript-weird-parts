function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// The prototype of a function is not that of the function itself
// It is the prototype of the objects created using that function constructor

Person.prototype.getFullName = function () {
  console.log(this.firstName, this.lastName);
};

let john = new Person('John', 'Doe');
john.getFullName();

let jane = new Person('Jane', 'Doe');
jane.getFullName();

// We can add the getFullName function inside the Person function constructor
// But each objet will be create in a new memory space so will create a duplicate of it
// Adding to prototype of the function constructor (actually the object) is more efficient
