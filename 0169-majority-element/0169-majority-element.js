/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let majority = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);

        if (map.get(num) > majority) { 
            return num;  
        }
    }
};