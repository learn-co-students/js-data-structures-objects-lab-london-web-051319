// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, val) {
  const obj = {};
  obj[key] = val;

  return Object.assign({}, driver, obj);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  driver[key] = val;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = { ...driver };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
