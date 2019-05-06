//====================================================
// Compare each item in the arrays
// Output values  that match  between the two arrays
//====================================================

var array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
var array_two = ["dog", "goose", "kite", "meal", "laptop"];

//====================================================
// Create var that will output values of matches
//====================================================

var outputArray = [];

//====================================================
// For loop to run array_one and array_two for matches
//====================================================

    for(var i = 0;i < array_one.length; i++) {

        if(array_two.indexOf(array_one[i]) != -1) {
       
            outputArray.push(array_one[i]);
        };
    }

//====================================================
// Console log the output value using var outputArray
//==================================================== 

console.log(outputArray)
