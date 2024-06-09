// Pseudocode
// Define a function named convertToCelsius that takes fahrenheit as a parameter
// Return  5/9 * (TF -32)
const convertToCelsius = function(fahrenheit) {
      return Math.round((5/9 * (fahrenheit - 32)) * 10) / 10;
};

// Pseudocode
// Define a function named convertToFahrenheit that takes celcius as a paramter
// Return 9/5*c + 32
const convertToFahrenheit = function(celcius) {
      return Math.round(((9/5)*celcius + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
