/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
        const threshold = Math.floor(nums.length / 3);
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    const result = [];
    for (const [num, count] of map) {
        if (count > threshold) {
            result.push(num);
        }
    }

    return result;
};