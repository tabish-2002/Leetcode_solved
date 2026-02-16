/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let map = new Map();
    const majority = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        
        // Check immediately after updating
        if (map.get(nums[i]) > majority) {
            return nums[i];
        }
    }
};