/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // stores elements, allows to look up in o(1)

    for (let i = 0; i <nums.length; i++){
        let otherInt= target - nums[i];
        if(map.has(otherInt)){
            return [map.get(otherInt), i]// return answer in array, we use []
        }
        map.set(nums[i], i);
    }
    
};