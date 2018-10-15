let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
var isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);
//To use bracket notation to access an object's property, we pass in the property name (key) as a string.
