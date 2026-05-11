/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        function bst(node, min, max) {
            if (!node) {
                return true;
            }

            if (min >= node.val || max <= node.val) {
                return false;
            }

            const n1 = bst(node.left, min, node.val)
            const n2 = bst(node.right, node.val, max);

            return n1 && n2;
        }
        return bst(root, -Infinity, Infinity);
    }
}
