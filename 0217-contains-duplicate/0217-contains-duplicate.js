/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // lets just store all variable seen in a hashset, set only allows unique values so it is best
    let seen = new Set();

    for(let val of nums){
        if(seen.has(val)){// cant write reverse because we will stop at the first new num
            return true;
        } 
         seen.add(val); // we need to add it if we dont see it
    }
    return false// out side the for loop
};