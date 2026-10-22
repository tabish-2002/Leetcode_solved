/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
     let n = nums.length;
    let asc = 0;
    let dsc = 0;

    for (let i = 1; i < n; i++) {
        // Using nums instead of undefined A
        if (nums[i] === (nums[i - 1] + 1) % n) asc++;
        if (nums[i - 1] === (nums[i] + 1) % n) dsc++;
    }

    // A consecutive cyclic sequence of length n has n - 1 matches
    if (asc === n - 1) {
        return nums[0] ? Math.min(n - nums[0], nums[0] + 2) : 0;
    }
    
    if (dsc === n - 1) {
        return Math.min(n - nums.at(-1), nums.at(-1)) + 1;
    }

    return -1;
};