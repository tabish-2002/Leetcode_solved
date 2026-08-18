/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
     // 1. Sort initially to start with the heaviest stones
    stones.sort((a, b) => b - a);

    // 2. Loop must run AS LONG AS we have 2 or more stones to smash
    while (stones.length > 1) {
        let y = stones.shift(); // Heaviest
        let x = stones.shift(); // Second heaviest

        if (x !== y) {
            let newStone = y - x;
            stones.push(newStone);
            // 3. Re-sort so the next heaviest stones move to the front
            stones.sort((a, b) => b - a);
        }
    }

    // 4. Return the last remaining stone, or 0 if none are left
    return stones.length ? stones[0] : 0;
    
};