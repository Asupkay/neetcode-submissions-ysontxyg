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
        let goodNodes = 0;

        function dfs(node, max) {
            if (!node) {
                return;
            }

            if (max <= node.val) {
                goodNodes++;
            }

            dfs(node.left, Math.max(node.val, max))
            dfs(node.right, Math.max(node.val, max))

            return
        }

        dfs(root, -Infinity)

        return goodNodes;
    }
    
}
