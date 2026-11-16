/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    const target = threshold * k;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];                 // ADD the new element

        if (i >= k) {
            sum -= arr[i - k];         // EVICT the one that left
        }

        if (i >= k - 1 && sum >= target) {   // window is full: CHECK
            count++;
        }
    }
    return count;
};