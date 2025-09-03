/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // since we are returning an empty arr, create an arr to push values into a arr
    let newArray = [];

    for(let i = 1; i <= n; i++){// start at 1, becuase it says 1 indexed
        if (i % 3 === 0 && i % 5 === 0){
            newArray.push("FizzBuzz")// print fizzbuzz first because all other numbers will not be printed
        } else if (i % 3 === 0 ){
            newArray.push("Fizz")
        } else if (i % 5 === 0){
            newArray.push("Buzz")
        } else{
            newArray.push(i.toString()) // add brackets at the end
        }
    }
    return newArray;
};