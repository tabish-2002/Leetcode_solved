/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
      const dist = (p) => p[0] * p[0] + p[1] * p[1];

    const partition = (left, right) => {
        const pivot = dist(points[right]);
        let i = left;
        for (let j = left; j < right; j++) {
            if (dist(points[j]) <= pivot) {
                [points[i], points[j]] = [points[j], points[i]];
                i++;
            }
        }
        [points[i], points[right]] = [points[right], points[i]];
        return i;
    };

    let left = 0;
    let right = points.length - 1;

    while (left <= right) {
        const p = partition(left, right);
        if (p === k) break;
        if (p < k) left = p + 1;
        else right = p - 1;
    }

    return points.slice(0, k);
    
};