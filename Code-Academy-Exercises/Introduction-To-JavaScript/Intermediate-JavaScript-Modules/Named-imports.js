import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {

}
function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );

  });
}
displayFuelCapacity();
displayStaffStatus();
//To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.
