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
        const bfs = [root]
        while (bfs.length > 0) {
            const levelLength = bfs.length;
            results.push([])
            for (let i = 0; i < levelLength; i++) {
                const cNode = bfs.shift();
                results[results.length - 1].push(cNode.val);
                if(cNode.left) {
                    bfs.push(cNode.left)
                }
                if (cNode.right) {
                    bfs.push(cNode.right)
                }
            }
        }
        return results;
    }
}
