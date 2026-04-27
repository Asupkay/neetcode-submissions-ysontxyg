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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function dfs(node1, node2) {
            if (node1 === null && node2 === null) {
                return true;
            }

            if (node1 === null && node2 !== null || node2 === null && node1 !== null || node1.val !== node2.val) {
                return false;
            }
            const t1 = dfs(node1.left, node2.left);
            const t2 = dfs(node1.right, node2.right)
            return t1 && t2;
        }

        return dfs(p, q);

    }
}
