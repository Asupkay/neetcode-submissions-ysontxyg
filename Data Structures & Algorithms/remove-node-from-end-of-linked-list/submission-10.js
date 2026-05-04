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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode();
        dummy.next = head;

        let p1 = dummy;
        let p2 = head;
        for (let i = 0; i < n; i++) {
            p2 = p2.next;
        }

        while(p2 !== null) {
            p1 = p1.next;
            p2 = p2.next;
        }

        p1.next = p1.next.next;
        return dummy.next;
    }
}
