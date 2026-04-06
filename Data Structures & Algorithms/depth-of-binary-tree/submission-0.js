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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) {
            return 0;
        }
        const n1 = this.maxDepth(root.left);
        const n2 = this.maxDepth(root.right);
        return 1 + Math.max(n1, n2);
    }
}
