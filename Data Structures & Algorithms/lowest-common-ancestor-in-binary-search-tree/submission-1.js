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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(node) {
            if (!node) {
                return null;
            }

            if (q.val < node.val && p.val < node.val) {
                return dfs(node.left);
            } else if (q.val > node.val && p.val > node.val) {
                return dfs(node.right);  
            }
            return node;
        }

        return dfs(root);
    }
}
