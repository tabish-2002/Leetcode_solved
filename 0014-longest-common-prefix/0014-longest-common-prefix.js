/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        if(strs.length === 0) return "";
    
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]; // Get character from first string
        
        // Check this character against ALL other strings
        for (let s of strs) {
            if (i >= s.length || s[i] !== char) {
                // Mismatch found or string too short
                return strs[0].slice(0, i);
            }
        }
    }
    
    return strs[0]; // All of first string is common prefix
    
};