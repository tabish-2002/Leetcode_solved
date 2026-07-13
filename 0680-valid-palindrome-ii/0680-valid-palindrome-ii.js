/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (s.length < 1) return true;

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            let l1 = left + 1, r1 = right, ok1 = true;
            while (l1 < r1) {
                if (s[l1] !== s[r1]) { ok1 = false; break; }
                l1++; r1--;
            }

            let l2 = left, r2 = right - 1, ok2 = true;
            while (l2 < r2) {
                if (s[l2] !== s[r2]) { ok2 = false; break; }
                l2++; r2--;
            }

            return ok1 || ok2;
        }
        left++;
        right--;
    }

    return true;
};