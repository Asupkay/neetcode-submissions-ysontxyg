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
        let length = 0;
        let c = head;
        if (!head || !head.next) {
            return null;
        }

        while(c !== null) {
            length++;
            c = c.next;
        }

        console.log(head, length, n)

        let jumps = length - n;
        const dummy = new ListNode();
        c = dummy;
        c.next = head;
        while(jumps > 0) {
            console.log(jumps, c)
            jumps--;
            c = c.next;
        }

        c.next = c.next?.next;

        return dummy.next;
    }
}
