/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }   // <-- the counting loop ends here

    const bucket = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, count] of map) {
        bucket[count].push(num);
    }

    const result = [];
    for (let c = bucket.length - 1; c >= 0 && result.length < k; c--) {
        for (const num of bucket[c]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
};