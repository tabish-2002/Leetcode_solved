/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      // Quick check: if lengths are different, t cannot be an anagram of s
    if (s.length !== t.length) return false;

    // Create a map to store frequency of each character in s
    const map = new Map();

    // Loop through each character in s
    for (let char of s) {
        // If char is already in map, increment its count
        // Otherwise, initialize count to 1
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Loop through each character in t
    for (let char of t) {
        // If char is not in map, it means t has an extra character not in s
        // → not an anagram
        if (!map.has(char)) {
            return false;
        }

        // Subtract 1 from the count of this character
        map.set(char, map.get(char) - 1);

        // If count becomes 0, remove the character from the map
        // This keeps the map clean and helps with final check
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    // If all characters matched perfectly, map will be empty
    // → t is an anagram of s
    return true;
    
};