/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
        let maxStreak = 0;
    let currentStreak = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentStreak++;
            // Dynamically update the max streak if the current one is longer
            if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
            }
        } else {
            // Encountered a 0, so reset the current sequence
            currentStreak = 0;
        }
    }
    
    return maxStreak;
    
};