const convertToCelsius = function (fahrenheit) {
  return (((fahrenheit - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = function (celcuis) {
  return (celcuis * 1.8) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
