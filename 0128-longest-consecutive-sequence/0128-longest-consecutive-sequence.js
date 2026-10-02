/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;                       // best answer overall

    for (const num of set) {
        if (!set.has(num - 1)) {           // only run starts
            let current = num;
            let length = 1;                // this run's length

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;

};