var MyHashMap = function() {
    this.map = {};  // Object to store key-value pairs
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;  // Store the value at this key
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if (this.map[key] !== undefined) {  // Check if key exists
        return this.map[key];  // Return the value
    }
    return -1;  // Key not found, return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.map[key];  // Remove the key-value pair
};