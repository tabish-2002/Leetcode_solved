/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arrAnswer = [];
    
    for (let i = 1; i <=n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            arrAnswer.push("FizzBuzz")
        } else if (i % 3 === 0){
           arrAnswer.push("Fizz") 
        } else if (i % 5 === 0){
            arrAnswer.push("Buzz") 
        } else{
            arrAnswer.push(i.toString())
        }
    }
    return arrAnswer;
};