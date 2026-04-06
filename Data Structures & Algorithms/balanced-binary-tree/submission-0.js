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
    isBalanced(root) {
        let isBalanced = true;
        function dfs(node) {
            if (!node) {
                return 0;
            }
            const n1 = dfs(node.left);
            const n2 = dfs(node.right);
            if (Math.abs(n1 - n2) > 1) {
                isBalanced = false;
            }
            return Math.max(n1, n2) + 1;
        }
        dfs(root)
        return isBalanced;
    }
}
