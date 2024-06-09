// Pseudocode
// Define a function named sumAll that takes two positive parameters
// Set a parameter sum = 0
// IF a parameter is negative:
//      Return "ERROR"
// ELSE IF parameters aren't number type:
//      Return "ERROR"
// ENDIF
// Loop starting from the smaller number to bigger:
//     sum all number between including parameters
// ENDLOOP
const sumAll = function(min, max) {
    let sum = 0;
    if(min < 0 || max < 0) return "ERROR";
    if(typeof min !== "number" || typeof max !== "number") return "ERROR";
    if (min > max) {
        [min, max] = [max,min]; 
    }

    for(let i = min;i <= max;i++) {
        sum += i;
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
