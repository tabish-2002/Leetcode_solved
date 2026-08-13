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
 * @return {boolean}
 */
var isBalanced = function(root) {
        function checkHeight(node){
        if (!node) return 0;                          // fix: 0, not -1

        let leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1;

        let rightHeight = checkHeight(node.right);     // fix: node.right
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;  // fix: spelling

        return Math.max(leftHeight, rightHeight) + 1;
    }
    return checkHeight(root) !== -1; 
};