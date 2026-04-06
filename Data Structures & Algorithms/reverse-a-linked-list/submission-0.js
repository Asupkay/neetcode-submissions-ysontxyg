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
     * @return {ListNode}
     */
    reverseList(head) {
        let p1 = null;
        let p2 = head;
        if (!head) {
            return head;
        }
        let p3 = head.next;
        while (p2 !== null) {
            p2.next = p1;
            p1 = p2;
            p2 = p3;
            p3 = p2?.next;
        }
        return p1;
    }
}
