class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjacencyList = {}
        for (let i = 0; i < prerequisites.length; i++) {
            const prereq = prerequisites[i];
            if (adjacencyList[prereq[0]]) {
                adjacencyList[prereq[0]].push(prereq[1]);
            } else {
                adjacencyList[prereq[0]] = [prereq[1]];
            }
        }

        const visiting = new Set();
        console.log(adjacencyList);

        function dfs(i) {
            if (visiting.has(i)) {
                return false;
            }
            if (!adjacencyList[i] || adjacencyList[i].length === 0) {
                return true;
            }
            visiting.add(i);
            for (const edge of adjacencyList[i]) {
                if (!dfs(edge)) {
                    return false;
                }
            }
            visiting.delete(i);
            adjacencyList[i] = [];
            return true;
        }
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false;
            }
        }
        return true;
    }
}
