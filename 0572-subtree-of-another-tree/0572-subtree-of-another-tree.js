/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // Base case: if root is null, there's no subtree
    if (!root) return false;
    
    // Check if current tree matches subRoot
    if (isSameTree(root, subRoot)) return true;
    
    // Recursively check left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Helper function: Check if two trees are identical
function isSameTree(p, q) {
    // Both null - identical
    if (!p && !q) return true;
    
    // One null, one not - different
    if (!p || !q) return false;
    
    // Different values - different
    if (p.val !== q.val) return false;
    
    // Check if left and right subtrees are identical
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}