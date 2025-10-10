/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     // 1. Normalize: lowercase + remove non-alphanumeric
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Initialize pointers
    let left = 0;
    let right = s.length - 1;
    
    // 3. Compare from both ends
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;  // mismatch
        }
        left++;
        right--;
    }
    
    // 4. If loop finishes, it's a palindrome
    return true;
    
};