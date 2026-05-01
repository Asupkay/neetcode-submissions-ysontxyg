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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {

        let result = '';
        function dfs(node) {
            if (!node) {
                result = `${result},N`;
                return;
            }

            result = `${result},${node.val}`

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return result;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const nodeArray = data.split(',');
        let sharedIndex = 0;
        
        function dfs() {
            if (nodeArray[sharedIndex] === 'N') {
                return;
            }

            const nNode = new TreeNode(nodeArray[sharedIndex]);

            sharedIndex++;
            nNode.left = dfs();
            sharedIndex++;
            nNode.right = dfs();

            return nNode;
        }

        return dfs();
        
    }
}
