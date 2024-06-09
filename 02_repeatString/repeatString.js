// Pseudocode
// 1- Define a function named repeatString that takes two
// arguments string and number
// 2- Set a variable named repeatedString to empty string
// 3- Loop till the number and append the string the variable
// 4- Return the result
const repeatString = function(string, num) {
    let repeatedString = "";
    if(num < 0) return "ERROR";
    for(let i = 0;i < num;i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
