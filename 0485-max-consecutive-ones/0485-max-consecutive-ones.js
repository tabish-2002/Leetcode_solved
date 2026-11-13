/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] ===1){
            current ++;
        }else{
            current = 0;
        }
        if (current > max){
        max = current;
    }
    }
    return max;
};