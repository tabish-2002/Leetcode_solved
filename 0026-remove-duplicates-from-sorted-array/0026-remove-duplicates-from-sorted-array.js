/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;// will act as the first pointer

    for (let i = 0; i <nums.length; i++){// go tjru array
        if (nums[i] !== nums[k-1]){// if the values are not equa. this compares the last 2 values
            nums[k] = nums[i]// we set nums of k to the values of I
            k++;// set the k pointer forward
        }
    }
    return k;// return the k pointer after we have gone thru the array
    
};