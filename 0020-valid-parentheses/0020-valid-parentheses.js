/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapPairing = {
        ')': '(',
        '}':'{',
        ']':'['
    };
    for (const char of s){
        const isBracket = (char in mapPairing)
        if(!isBracket){
            stack.push(char);
            continue;
        }
        const isEqual = (stack[stack.length -1]=== mapPairing[char]);
        if(isEqual){
            stack.pop();
            continue;
        }
        return false;
    }
    return stack.length === 0;
};