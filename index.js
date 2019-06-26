// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver) {
    driver = {
        name: "Sam",
        address: "11 Broadway"
    }
    return driver;
}

function  destructivelyUpdateDriverWithKeyAndValue(driver, address) {
    driver[address] = "12 Broadway"

    return driver;
}

function deleteFromDriverByKey(driver, name) {
    const newdriver = Object.assign({}, driver);

    delete newdriver[name];

    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
    delete driver[name];

    return driver;
}