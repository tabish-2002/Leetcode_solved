/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();// we are declaring a new map variable, so let is used
    // since we are gicen an array, we use the length function
    for(let i = 0; i<nums.length; i ++){
        let compliment = target - nums[i];
        if(map.has(compliment)){
            return [map.get (compliment), i];
        }
        map.set(nums[i], i)// need set both index and value
    }
    
};
// use () for function, and [] for index values