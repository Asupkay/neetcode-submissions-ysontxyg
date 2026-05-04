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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let p1 = l1;
        let p2 = l2;
        const dummy = new ListNode();
        let res = dummy;
        while(p1 !== null || p2 !== null) {
            const val1 = p1 !== null ? p1.val : 0;
            const val2 = p2 !== null ? p2.val : 0;

            if (!carry && (p1 === null || p2 === null)) {
                if (p1 === null) {
                    res.next = p2;
                } else {
                    res.next = p1
                }
                break;
            }

            const newVal = val1 + val2 + carry;
            res.next = new ListNode(newVal % 10);
            carry = Math.floor(newVal/10);

            if (p1 !== null) {
                p1 = p1.next;
            }
            if (p2 !== null) {
                p2 = p2.next;
            }
            res = res.next;
        }

        if (carry > 0) {
            res.next = new ListNode(carry);
        }
        return dummy.next;
    }
}
