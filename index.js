const array1 = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (array1) {
    return array1.slice(0,2)
}
const returnLastTwoDrivers = function (array1) {
    return array1.slice(2,4)
}    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
      };
    };

    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    const selectDifferentDrivers = function (drivers, driversToReturn) {
        return driversToReturn(drivers);
      };
      