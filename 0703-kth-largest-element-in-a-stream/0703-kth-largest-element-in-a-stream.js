/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
        this.k = k;
    this.heap = [];

    // build heap with initial nums
    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
        const heap = this.heap;

    // push
    heap.push(val);

    // bubble up
    let i = heap.length - 1;
    while (i > 0) {
        let p = Math.floor((i - 1) / 2);
        if (heap[p] <= heap[i]) break;

        [heap[p], heap[i]] = [heap[i], heap[p]];
        i = p;
    }

    // keep only k elements
    if (heap.length > this.k) {
        // remove min (root)
        heap[0] = heap.pop();

        // bubble down
        i = 0;
        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let smallest = i;

            if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
            if (r < heap.length && heap[r] < heap[smallest]) smallest = r;

            if (smallest === i) break;

            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    }

    return heap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */