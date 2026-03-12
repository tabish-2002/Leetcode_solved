/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
   while (stones.length > 1) {
        // Sort stones descending
        stones.sort((a, b) => b - a);

        // Take two heaviest stones
        let y = stones.shift(); // largest
        let x = stones.shift(); // second largest

        // If not equal, push the difference back
        if (y !== x) {
            stones.push(y - x);
        }
    }

    // Return last stone weight or 0
    return stones.length === 1 ? stones[0] : 0;
};