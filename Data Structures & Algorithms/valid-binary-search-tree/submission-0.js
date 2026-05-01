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
    isValidBST(root) {
        let isValid = true;

        function bst(node) {
            if (!node) {
                return null;
            }
            if (!isValid) {
                return;
            }

            let min = node.val;
            let max = node.val;
            const n1 = bst(node.left);
            const n2 = bst(node.right);
            if (n1 && n1[1] > max) {
                isValid = false;
                max = n1[1];
            }
            if (n2 && n2[0] < min) {
                isValid = false;
                min = n2[0];
            }

            return [min, max];
        }
        bst(root);
        return isValid;
    }
}
