function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// new is an operator
// When the new keyword is used, it creates an empty object
// When the function is invoked, new keyword assigns the object as the 'this' value for that function
let john = new Person('John', 'Doe');
console.log(john);

// The function constructor should not return an object as it will then be assigned to the variable

function NewPerson(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  return { defaultName: 'Default', defaultLastName: 'Default' };
}

let jane = new NewPerson('John', 'Doe');
console.log(jane);
