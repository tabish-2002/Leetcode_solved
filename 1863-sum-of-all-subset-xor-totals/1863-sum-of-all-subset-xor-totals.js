/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let n = nums.length;
    let total = 0;
    for (let m = 0; m < (1 << n); m++) {
        let subsetXor = 0;
        for (let i = 0; i < n; i++) {
            if (m & (1 << i)) {
                subsetXor ^= nums[i];
            }
        }
        total += subsetXor;
    }
    return total;
};