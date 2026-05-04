class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue();

        for (let i = 0; i < nums.length; i++) {
            minHeap.push(nums[i]);

            if (minHeap.size() > k) {
                minHeap.pop();
            }
        }

        return minHeap.front();
    }
}
