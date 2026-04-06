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

        let result = [];
        function dfs(node) {
            if (!node) {
                result.push(`N`);
                return;
            }

            result.push(node.val)

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return result.join(',');
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
            const val = nodeArray[sharedIndex];
            sharedIndex++;
            if (val === 'N') {
                return null;
            }

            const nNode = new TreeNode(val);

            nNode.left = dfs();
            nNode.right = dfs();

            return nNode;
        }

        return dfs();
        
    }
}
