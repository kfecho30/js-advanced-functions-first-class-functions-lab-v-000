// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mult){
  return function (fare) {
    return mult * fare;
  };
}

const fareDoubler = function (fare) {
  return fare * 2;
}

const fareTripler = function (fare) {
  return createFareMultiplier(3);
}

selectDifferentDrivers(arrayOfDrivers, function)