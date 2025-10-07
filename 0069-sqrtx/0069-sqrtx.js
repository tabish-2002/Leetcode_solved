/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
       if (x < 2) return x; // handle 0 and 1 quickly

    let left = 1;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let midSquared = mid * mid;

        if (midSquared === x) {        // ✅ exact match
            return mid;
        } else if (midSquared < x) {   // ✅ guess too low
            left = mid + 1;
        } else {                       // ✅ guess too high
            right = mid - 1;
        }
    }

    return right; // ✅ right will be floor(√x)
    
};