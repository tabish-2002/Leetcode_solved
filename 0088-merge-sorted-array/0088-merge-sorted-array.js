var merge = function(nums1, m, nums2, n) {
    // Step 1: Combine first m elements of nums1 with nums2
    let merged = nums1.slice(0, m).concat(nums2.slice(0, n));

    // Step 2: Sort the combined array
    merged.sort((a, b) => a - b);

    // Step 3: Copy sorted elements back to nums1
    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i];
    }
};
