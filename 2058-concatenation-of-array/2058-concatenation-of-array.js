/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let concatArr = []

    for (let i = 0; i< n; i++){
        concatArr [i] = nums[i];
        concatArr [i + n] = nums [i]
    }
    return concatArr
};