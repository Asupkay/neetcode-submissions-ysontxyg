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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;
        const dummy = new ListNode()
        let current = dummy;
        while (p1 !== undefined || p2 !== undefined) {
            if (p2 === null) {
                current.next = p1;
                break;
            }
            if (p1 === null) {
                current.next = p2;
                break;
            }
            if (p1.val > p2.val) {
                current.next = p2;
                p2 = p2.next;
            } else {
                current.next = p1;
                p1 = p1.next;
            }
            current = current.next;
        }
        return dummy.next;
    }
}
