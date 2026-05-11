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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preorderIndex = 0;
        function dfs(left, right) {
            if (left > right) {
                return null;
            }

            const root = new TreeNode(preorder[preorderIndex]);

            const mid = inorder.indexOf(preorder[preorderIndex]);
            preorderIndex++;

            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);

            return root;
        }
        return dfs(0, inorder.length - 1)
    }
}
