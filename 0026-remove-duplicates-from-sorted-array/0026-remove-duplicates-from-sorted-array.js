/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;// will act as the first pointer

    for (let i = 0; i <nums.length; i++){// go thru the array
        if (nums[i] !== nums[k-1]){// if the last 2 values are not equal
            nums[k] = nums[i]// we set the values to I
            k++;// set the values forward
        }
    }
    return k;
    // we return the k pointer
};