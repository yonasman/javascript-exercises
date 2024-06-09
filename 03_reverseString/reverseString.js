// Pseudocode
// Define a fucntion named reverseString that takes a string paramter
// Set a variable named newString to empty string
// Loop starting from the parameter.length - 1 to 0:
//      Append the letters to newString
// ENDLOOP
// Return newString

const reverseString = function(string) {
    let newString = "";
    for(let i = string.length - 1;i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
