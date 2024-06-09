// Pseudocode
// Define a function named leapYears that takes year as a parameter
// IF a year is divisible by 100 & 400:
//      Return true
// ELSE IF year is divisible by 4:
//      return true
// ELSE return false
// ENDIF
const leapYears = function(year) {
   if(year % 4 == 0) {
        if(year % 100 == 0 && year % 400 == 0) {
            return true;
        } else if(year % 100 == 0 && year % 400 != 0) {
            return false;
        }
        return true;
   }
   return false;
};

// Do not edit below this line
module.exports = leapYears;
