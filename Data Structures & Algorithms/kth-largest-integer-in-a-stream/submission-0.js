class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MinPriorityQueue();
        this.max = k;
        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        if (this.heap.size() > this.max) {
            this.heap.pop();
        }
        return this.heap.front()
    }
}
