/* JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. 
If you are familiar with other programming languages, JavaScript objects are a bit different. You do not need to create classes in order to create objects.
JavaScript objects are containers for named values called properties.
*/

//Declaration of an object

var person = {
    firstName:'Mehedi',
    lastName:'Ahsan',
    id:2501,
    location:'Faridpur'
};

//call an object

console.log(person);
console.log("Person id is:",person.id); //show specific value of the property
person.address='Bagerhat'; //add a property in the object
console.log("\n");
console.log(person);

//object keys and values show
console.log("\n");

console.log(Object.keys(person));
console.log(Object.values(person));

//another two types to find the value of property
console.log("\n");

var personName= person['firstName']; //kind of array
console.log(personName);

var propertyName = 'location'; //first find the name
var propertyValue = person[propertyName];
console.log(propertyName,propertyValue);


