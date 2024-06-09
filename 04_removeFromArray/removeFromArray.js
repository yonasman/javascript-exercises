// Pseudocode
// Define a funcution that takes an array and elements to remove from array
// Set a new variable newArray to []
// For each item in args:
//    if item is not in array:
//        push it to new array
// Return new array

const removeFromArray = function(array, ...args) {
    let newArray = [];

    array.forEach((item)=> {
      if(!args.includes(item)) {
        newArray.push(item);
      }
    })
   
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
