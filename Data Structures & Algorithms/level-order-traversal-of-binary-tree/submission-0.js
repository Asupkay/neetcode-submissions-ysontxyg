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
     * @return {number[][]}
     */
    levelOrder(root) {

        const results = [];

        if (!root) {
            return results;
        }
        const bfs = [[root,0]]
        while (bfs.length > 0) {
            const [cNode, level] = bfs.pop();
            if (results[level]) {
                results[level].push(cNode.val);
            } else {
                results[level] = [cNode.val]
            }
            if (cNode.left) {
                bfs.unshift([cNode.left, level + 1]);
            }
            if (cNode.right) {
                bfs.unshift([cNode.right, level + 1]);
            }
        }
        return results;
    }
}
