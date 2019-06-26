// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, newKey, newValue) {
    let newDriver = Object.assign({}, driver, {[newKey]:newValue});
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, newKey, newValue){
    let newDriver = Object.assign(driver, {[newKey]:newValue});
    return newDriver;
}

function deleteFromDriverByKey(driver, newKey){
    let newDriver = Object.assign({}, driver);
    delete newDriver[newKey];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, newKey){
    delete driver[newKey];
    return driver;
}