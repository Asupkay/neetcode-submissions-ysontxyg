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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function traverseTree(node) {
            if (!node) {
                return false;
            }

            if (node.val === subRoot.val) {
                const res = compare(node, subRoot);
                if (res) {
                    return true;
                }
            }

            return traverseTree(node.left) || traverseTree(node.right);
        }

        function compare(rootNode, subRootNode) {
            if (rootNode === null && subRootNode === null) {
                return true;
            }

            if (!rootNode || !subRootNode || rootNode.val !== subRootNode.val) {
                return false;
            }

            return compare(rootNode.left, subRootNode.left) && compare(rootNode.right, subRootNode.right);
        }

        return traverseTree(root);
    }
}
