function findMatching(driverArray, driverName) {
    return driverArray.filter(driverElement => driverElement.toUpperCase() === driverName.toUpperCase());
}

function fuzzyMatch(driverArray, driverName) {
    let nameLength = driverName.length;
    return driverArray.filter(driverElement => driverElement.toUpperCase().substring(0, nameLength) === driverName.toUpperCase());
}

function matchName(driverArray, driverName) {
    return driverArray.filter(driverElement => driverElement.name === driverName);
}