/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while (left<=right){
        let mid = Math.floor((left+right)/2);
        // if the target is the mid value
        if((nums[mid]=== target)) return mid;

        // if the value is less then mid
        if(target> nums[mid]){
            left = mid +1;
        } else {
            right = mid -1;
        }

    }
    return -1
};