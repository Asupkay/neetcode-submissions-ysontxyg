/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }
        const minHeap = new MinPriorityQueue((x) => x.val);

        for (const list of lists) {
            minHeap.enqueue(list);
        }

        const firstNode = new ListNode(0);
        let cur = firstNode;
        while(minHeap.size() > 0) {
            let val = minHeap.pop();
            cur.next = new ListNode(val.val)
            cur = cur.next;

            val = val.next;
            if (val != null) {
                minHeap.enqueue(val);
            }
        }
        return firstNode.next;
    }
}
