/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // firstly dont forget the solution, practise everyday and keep imporving
    if(s.length!== t.length){
        return false
    };// recall this is the best case, this line will remove any values that dont line up

    let map = new Map()// recall we use maos when we want to count and keep track of different values
    for (let ch of s){// go thru values of s
        map.set(ch, (map.get(ch)||0)+ 1);// once set, we start at 0 and one everytime we get a new char
    }

    for (let ch of t){// go thru the values of t
        if(!map.has(ch)) return false;// if its not in the map return false
        map.set(ch, map.get(ch)-1);// its itsin the map we subtract 1

        if(map.get(ch)=== 0){
            map.delete(ch)
        }
    }
    return map.size === 0;// once we set to 0, it means that it is a valid anagram
};