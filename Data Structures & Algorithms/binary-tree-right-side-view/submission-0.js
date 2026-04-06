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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];

        function dfs(node, height) {
            if (!node) {
                return;
            }

            result[height] = node.val;

            dfs(node.left, height + 1);
            dfs(node.right, height + 1);
        }

        dfs(root, 0);

        return result;
    }
}
