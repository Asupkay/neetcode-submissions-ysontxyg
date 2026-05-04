// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return null;
        }
        let c = head;
        const map = new Map();
        while(c !== null) {
            const nextNode = c.next;
            const randomNode = c.random;

            const copy = map.get(c) ?? new Node(c.val)
            map.set(c, copy);

            if (nextNode !== null) {
                copy.next = map.get(nextNode) || new Node(nextNode.val);
                map.set(nextNode, copy.next)
            }
            if (randomNode !== null) {
                copy.random = map.get(randomNode) || new Node(randomNode.val);
                map.set(randomNode, copy.random)
            }

            c = c.next;
        }

        return map.get(head);
    }
}
