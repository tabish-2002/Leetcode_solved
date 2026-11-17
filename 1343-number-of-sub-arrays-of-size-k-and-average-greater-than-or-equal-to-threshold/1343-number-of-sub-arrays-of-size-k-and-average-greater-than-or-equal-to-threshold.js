/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    const target = threshold*k;
    let count = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];

        if (i>=k){
            sum -= arr[i-k];
        }
        if (i >= k -1 && sum >= target){// if its in range and equals target
            count ++;
        }
    }
    return count;
    
};