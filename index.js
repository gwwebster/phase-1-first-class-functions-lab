const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);

fareDoubler(fare);

function fareTripler (fare) {
    return fare * 3
}

// Below code would not past the tests for fareTripler for some reason
//const fareTripler = createFareMultiplier(3);
//fareTripler(fare);

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    } else {
        return "Please enter an aray"
    }
    }
