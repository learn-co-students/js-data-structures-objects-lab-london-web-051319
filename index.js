// Write your solution in this file!
// document.addEventListener('DOMContentLoaded', function(e) {
// });
const driver = {};

let updateDriverWithKeyAndValue = (driver, key, value) => {
   const newDriver =  {...driver};
   newDriver[key] = value
   return newDriver;
}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
   driver[key] = value;
   return driver;
}

let deleteFromDriverByKey = (driver, key) => {
   const newDriver = Object.assign({}, driver);
   delete newDriver[key];
   return newDriver;
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
   delete driver[key];
   return driver;
}
