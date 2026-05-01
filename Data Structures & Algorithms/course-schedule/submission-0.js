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

        const gVisited = new Set();
        console.log(adjacencyList);
        for (let i = 0; i < numCourses; i++) {
            if (gVisited.has(i)) {
                continue;
            }

            const queue = [i];
            const visited = new Set();
            while(queue.length > 0) {
                const cCourse = queue.pop();
                if (visited.has(cCourse)) {
                    return false;
                }
                visited.add(cCourse);
                gVisited.add(cCourse);
                if (adjacencyList[cCourse]) {
                    queue.push(...adjacencyList[cCourse])
                }
            }
        }
        return true;
    }
}
