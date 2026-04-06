/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }

        const graph = [new Node(node.val)];
        const visited = new Set();

        
        let queue = [node];
        while (queue.length > 0) {
            const cNode = queue.pop();
            console.log(graph);
            if (visited.has(cNode.val)) {
                continue;
            }
            visited.add(cNode.val);

            for (const neighbor of cNode.neighbors) {
                queue.unshift(neighbor);
                if (graph[neighbor.val - 1] === undefined) {
                    graph[neighbor.val - 1] = new Node(neighbor.val);
                }
                graph[cNode.val - 1].neighbors.push(graph[neighbor.val - 1]);
            }
        }
        console.log(graph)
        return graph[0];
    }
}
