/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length !== t.length) return false;

    let map = new Map();

    // Count characters in s
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Subtract counts using t
    for (let char of t) {
        if (!map.has(char)) {
            return false; // char not found
        }
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) {
            map.delete(char); // cleanup
        }
    }

    // If map is empty, it's a valid anagram
    return map.size === 0;
    
};