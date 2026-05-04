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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let prevGroupTail = dummy;

        while(true) {
            let checker = prevGroupTail;

            for (let i = 0; i < k; i++) {
                checker = checker.next;
                if (!checker) return dummy.next
            }
            
            let prev = null;
            let current = prevGroupTail.next;

            for (let i = 0; i < k; i++) {
                const temp = current.next;
                current.next = prev;
                prev = current;
                current = temp;
            }

            const newTail = prevGroupTail.next;
            prevGroupTail.next = prev;
            newTail.next = current;

            prevGroupTail = newTail;
        }
    }
}
