/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let curSum = 0;
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++){
        if(nums [i] === 1){
            curSum ++;
        } else{
            curSum = 0;
        }
        if (curSum > maxSum){
            maxSum = curSum;
        }
    }
    return maxSum;
    
};