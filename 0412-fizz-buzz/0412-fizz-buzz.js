/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = [];

    for (let i = 1; i<=n; i ++){// since we are using a array that is not given to us, we use n no lenght of n
        if(i % 3 === 0 && i % 5 === 0 ){/* we are using this 15 first because we need this condition to be
        checked first, else the previous statements will run, if we dont do this then the condition will not 
        be able to catch all the problems that are given to us
        */
            arr.push("FizzBuzz")
        }else if(i % 3 === 0){
            arr.push("Fizz")      
        }else if(i % 5 === 0){
            arr.push("Buzz")  
        } else {
            arr.push(i.toString())
        }
    }
    return arr;
};