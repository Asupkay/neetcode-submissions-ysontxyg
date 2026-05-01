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
        const root = new TreeNode(nodeArray[0]);

        const stack = [[0, root]];
        while(stack.length > 0) {
            const [cIndex, cLocation] = stack.pop();

            if (nodeArray[2 * cIndex + 1] !== 'N') {
                cLocation.left = new TreeNode(nodeArray[2 * cIndex + 1])
                stack.push([2*cIndex + 1, cLocation.left]);
            }
            if (nodeArray[2 * cIndex + 2] !== 'N') {
                cLocation.right = new TreeNode(nodeArray[2 * cIndex + 2])
                stack.push([2*cIndex + 2, cLocation.right]);
            }
        }

        return root;
        
    }
}
