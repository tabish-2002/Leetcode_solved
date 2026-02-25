/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        let left = 0;
    let right = nums.length - 1;  // Add 'let'
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {  // Compare VALUES, not indices
            return mid;  // Found it! Return the index
        } else if (nums[mid] < target) {
            // Target is in the right half
            left = mid + 1;
        } else {
            // Target is in the left half
            right = mid - 1;
        }
    }
    
    return -1;  // Target not found
};