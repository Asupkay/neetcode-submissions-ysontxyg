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
        const lookup = {};

        for (let i = 0; i < inorder.length; i++) {
            lookup[inorder[i]] = i;
        }
        function dfs(left, right) {
            if (left > right) {
                return null;
            }

            const rootVal = preorder[preorderIndex];
            const root = new TreeNode(rootVal);

            const mid = lookup[rootVal];
            preorderIndex++;

            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);

            return root;
        }
        return dfs(0, inorder.length - 1)
    }
}
