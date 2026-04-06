class Node {
    constructor(key) {
        this.prev = null
        this.key = key;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.maxCapacity = capacity;
        this.values = new Map();
        this.length = 0;
        this.root = null;
        this.last = null;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.values.get(key)) {
            return -1;
        }
        this.nodeUpdate(this.values.get(key)[1]);
        return this.values.get(key)[0];
    }

    nodeUpdate(node) {
        if (this.root === node) {
            return;
        }
        const temp = node.next;
        if (temp === null) {
            this.last = node.prev;
        } else {
            node.next.prev = node.prev;
        }
        node.prev.next = temp;
        node.prev = null
        node.next = this.root;
        this.root = node;
        node.next.prev = this.root;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.values.get(key) === undefined) {
            const nNode = new Node(key);
            if (this.root === null) {
                this.root = nNode;
                this.last = nNode;
            } else {
                const temp = this.root;
                this.root = nNode;
                this.root.next = temp;
                temp.prev = this.root;
            }
            this.values.set(key, [value, nNode]);
            this.length++;

            if (this.length > this.maxCapacity) { 
                const temp = this.last;
                this.values.set(this.last.key, undefined);
                this.last = this.last.prev;
                this.last.next = null;
                this.length--;
            }
        } else {
            this.values.set(key, [value, this.values.get(key)[1]]);
            this.nodeUpdate(this.values.get(key)[1]);
        }
    }
}
