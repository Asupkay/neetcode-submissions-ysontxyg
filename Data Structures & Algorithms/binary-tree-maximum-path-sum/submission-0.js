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
    maxPathSum(root) {
        let max = null;

        function dfs(node) {
            if (!node) {
                return 0;
            }

            const n1 = dfs(node.left);
            const n2 = dfs(node.right);
            if (max === null) {
                max = node.val
            }
            max = Math.max(max, node.val, n1+node.val, n2+node.val, n1+n2+node.val);
            return Math.max(node.val, n1+node.val, n2+node.val);
        }
        dfs(root)
        return max;
    }
}
