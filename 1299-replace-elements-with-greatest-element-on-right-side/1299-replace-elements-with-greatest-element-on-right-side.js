/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = arr[arr.length -1]// why is this used to get the last integer
    arr[arr.length -1] = -1;

    for (let i = arr.length -2; i>=0; i--){
        const current = arr[i];
        arr[i] = max;
        max = Math.max(max,current);
    }
    return arr;
};