/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    let L = 0, R = s.length - 1;
    while (L < R) {
        if (s[L] !== s[R]) return false;
        L++;
        R--;
    }
    return true;
};