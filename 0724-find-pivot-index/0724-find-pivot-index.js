/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    for (const n of nums) total+= n

    let leftSum = 0;
    for (let i = 0; i <nums.length; i++){
        let rightSum = total - leftSum - nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i] 
    }
    return -1;
};