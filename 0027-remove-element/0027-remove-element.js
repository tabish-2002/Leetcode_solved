/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;// acts like a pointer starting at 0

    for (let i = 0; i<nums.length; i++){// we go thru the array
        if (nums[i] !== val){ // in nums of i(the value of i) are not the val
            nums[k] = nums[i] // we set the pointer to the value of, set with 1 =
            k++;// move the k pointer 
        }
    }
    return k // return the k
};