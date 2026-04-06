class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
           if (n === 1) {
        return [0];
    }
    const edgeMap = Array.from({length: n}, () => []);
    const indices = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        indices[edge[0]]++;
        indices[edge[1]]++;
        edgeMap[edge[0]].push(edge[1])
        edgeMap[edge[1]].push(edge[0])
    }

    const queue = [];
    for (let i = 0; i < indices.length; i++) {
        if (indices[i] === 1) {
            queue.push(i);
        }
    }

    let processed = 0;
    while(n - processed > 2) {
        processed += queue.length;
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            const c = queue.pop();
            const edges = edgeMap[c];

            for (let j = 0; j < edges.length; j++) {
                indices[edges[j]]--;
                if (indices[edges[j]] === 1) {
                    queue.unshift(edges[j])
                }
            }
        }
    }
    return queue;

    }
}
