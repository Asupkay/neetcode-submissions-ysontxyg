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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        let nElement = 0;
        let element = null;
        function dfs(node) {
            if (!node || element !== null) {
                return;
            }
            
            dfs(node.left)
            nElement++;
            if (nElement === k) {
                element = node.val;
            }
            dfs(node.right);

        }

        dfs(root);
        return element;
    }
}
