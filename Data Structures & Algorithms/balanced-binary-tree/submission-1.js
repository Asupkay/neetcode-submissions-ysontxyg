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
     * @return {boolean}
     */
    isBalanced(root) {
        function isBalanced(root) {
            if (!root) {
                return [0, true];
            }

            const m1 = isBalanced(root.left);
            const m2 = isBalanced(root.right);

            if (!m1[1] || !m2[1]) {
                return [0, false];
            }

            if (Math.abs(m2[0] - m1[0]) > 1) {
                return [0, false];
            }
            return [1 + Math.max(m1[0], m2[0]), true]


        }
        return isBalanced(root)[1];
    }
}
