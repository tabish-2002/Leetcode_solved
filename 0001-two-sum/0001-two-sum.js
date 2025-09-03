/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map() // create a new varibale for map

    for(let i = 0; i<nums.length; i++){
        let otherInt = target - nums[i]; // [] represent the values of i at that index
     if(map.has(otherInt)){
        return [map.get(otherInt), i]; // return the index which is denoted by the i wihtout square brackets
     }// we use [] to put into array over here
     map.set(nums[i], i); // this puts the entire value and index into the array, [i] is the value while i is the index
    }// inside the loop because we need to make sure if we have not seen this value
};