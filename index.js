const driver = {}

updateDriverWithKeyAndValue = (driver, key, value) => {
    let pair = {[key]: value};
    return Object.assign({}, driver, pair);
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey (driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
    delete driver[key];
    return driver;
}