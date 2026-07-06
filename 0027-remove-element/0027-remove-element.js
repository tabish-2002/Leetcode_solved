/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;// set up the initial pointer at the first value

    // go thru the values of nums
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== val){// if the values (deonoted by [] because it calls the number) are not val
            nums[k] = nums[i];// set the values of k to be i, what is the difference between = and ===
            k++;// keep pushing the values of k
        }
    }
    return k; // return the values of k
    
};