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
    goodNodes(root) {
        function dfs(node, max) {
            if (!node) {
                return 0;
            }

            let res = max <= node.val ? 1 : 0

            res += dfs(node.left, Math.max(node.val, max))
            res += dfs(node.right, Math.max(node.val, max))

            return res;
        }

        return dfs(root, -Infinity)
    }
    
}
