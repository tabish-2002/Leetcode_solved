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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function height(node){
        if (!node) return 0;

        let rightHeight = height(node.right);
        let leftHeight = height(node.left);

        diameter = Math.max(diameter, rightHeight + leftHeight);

        return Math.max(rightHeight,leftHeight) + 1;
    }
    height (root);
    return diameter;
    
};