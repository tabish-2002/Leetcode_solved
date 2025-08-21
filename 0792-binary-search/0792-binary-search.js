/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;// start at first index
    let right = nums.length -1

    while (left<= right){
        let mid = Math.floor((left + right )/2);

        if(nums[mid]=== target){
            return mid;
        }
        else if(nums[mid]< target){
             left = mid +1;
        } else {
            right = mid -1;
        }
    }
    return -1; /// if does not exist
};