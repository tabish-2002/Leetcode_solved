/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // Convert stones into a max heap
    stones.sort((a, b) => b - a);

    while (stones.length > 1) {

        // Take two largest stones
        let y = stones.shift();
        let x = stones.shift();

        // Smash them
        if (y !== x) {
            let newStone = y - x;

            // Insert new stone
            stones.push(newStone);
            stones.sort((a, b) => b - a);
        }
    }

    return stones.length ? stones[0] : 0;
};