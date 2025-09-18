/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map = new Map();

    for (let char of strs) {
        const key = char.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);   // create empty array if key doesn't exist
        }
        
        map.get(key).push(char); // now safe to push
    }
    return Array.from(map.values());
};