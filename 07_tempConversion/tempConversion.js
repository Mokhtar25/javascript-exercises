const convertToCelsius = function(num) {
  let rest = (num - 32) * 5/9;
  return Math.round(rest*10)/10;
};

const convertToFahrenheit = function(num) {
    let rest = (num * 9/5 + 32);
    return Math.round(rest * 10)/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
