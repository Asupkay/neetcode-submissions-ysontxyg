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
            if (adjacencyList[prereq[1]]) {
                adjacencyList[prereq[1]].push(prereq[0]);
            } else {
                adjacencyList[prereq[1]] = [prereq[0]];
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
                console.log(cCourse, visited)
                if (visited.has(cCourse)) {
                    return false;
                }
                visited.add(cCourse);
                gVisited.add(cCourse);
                if (adjacencyList[cCourse]) {
                    queue.unshift(...adjacencyList[cCourse])
                }
            }
        }
        return true;
    }
}
