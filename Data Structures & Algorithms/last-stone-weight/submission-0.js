// Loop over the stones and add them to a max heap
// Grab the top two rocks, collide them together and put it back onto the max heap
// Continue until there is one or zero in the heap

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        const heap = new MaxPriorityQueue();
        for (let stone of stones) {
            heap.push(stone);
        }

        while(heap.size() > 1) {
            const rock1 = heap.pop();
            const rock2 = heap.pop();

            const newWeight = Math.abs(rock2 - rock1);
            if (newWeight === 0) {
                continue;
            }
            heap.push(newWeight);

        }

        if (heap.size() === 0) {
            return 0
        }
        return heap.pop();
    }
}
