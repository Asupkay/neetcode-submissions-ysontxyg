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
        let lowestCommon = null;

        function dfs(node) {
            if (!node) {
                return false;
            }

            const n1 = dfs(node.left);
            const n2 = dfs(node.right);
            if (n1 && n2) {
                lowestCommon = node;
                return true;
            }
            if (n1 || n2) {
                if (node.val === p.val || node.val === q.val) {
                    lowestCommon = node;
                    return true;
                }
            }
            return n1 || n2 || node.val === p.val || node.val === q.val;

        }

        dfs(root);
        return lowestCommon;
    }
}
