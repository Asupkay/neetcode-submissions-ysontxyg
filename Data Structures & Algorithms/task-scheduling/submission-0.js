class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Array(26).fill(0);
        for (let i = 0; i < tasks.length; i++) {
            count[tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        const maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < count.length; i++) {
            if (count[i] > 0) {
                maxHeap.push(count[i]);
            }
        }

        const queue = [];
        let time = 0;
        while (queue.length > 0 || maxHeap.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const processed = maxHeap.pop();
                if (processed > 1) {
                    queue.unshift([processed - 1, time + n])
                }
            }

            if (queue.length > 0) {
                const front = queue[queue.length - 1];
                if (front[1] === time) {
                    maxHeap.push(queue.pop()[0]);
                }
            }
        }

        return time;
    }
}
