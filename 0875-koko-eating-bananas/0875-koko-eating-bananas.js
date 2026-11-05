/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // hours needed at speed mid
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours <= h) {
            right = mid;       // mid works, try slower (maybe smaller works too)
        } else {
            left = mid + 1;    // mid too slow, must go faster
        }
    }
    return left;
    
};