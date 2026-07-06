/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // declare base case
    if(strs.length === 0) return "";

    for (let i = 0; i<strs[0].length; i++){// go through first letter
        let char = strs[0][i];// remove the first lettter, then each next letter that follows

        for (let s of strs){// go through the strs of s
            if(i>= s.length|| s[i]!== char){// if i is >= then the length or does not equal the chars
                return strs[0].slice(0,i);// just slice the values
            }
        }// s is each individual string anf strs is the entire string
    } 
    return strs[0];// return the first values and any subsquent values
    
};