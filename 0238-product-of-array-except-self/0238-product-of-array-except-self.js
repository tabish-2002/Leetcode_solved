/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
      const n = nums.length;
    const result = new Array(n).fill(1);

    // Pass 1: result[i] = product of everything to the LEFT of i
    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }

    // Pass 2: multiply by the product of everything to the RIGHT of i
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};