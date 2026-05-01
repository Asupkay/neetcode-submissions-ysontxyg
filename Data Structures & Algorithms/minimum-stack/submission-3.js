class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MinStack {
    constructor() {
        this.root = null;
        this.minVal = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const temp = this.root;
        this.root = new Node(val);
        if (temp) {
            temp.prev = this.root;
        }
        if (this.minVal.length === 0 || this.minVal[this.minVal.length - 1] >= val) {
            this.minVal.push(val);
        }
        this.root.next = temp;
    }

    /**
     * @return {void}
     */
    pop() {
        if (!this.root) {
            return null;
        }
        const temp = this.root;
        this.root = this.root.next;
        if (this.root !== null) {
            this.root.prev = null;
        }
        if (this.minVal[this.minVal.length - 1] === temp.val) {
            this.minVal.pop();
        }
        return null;
    }

    /**
     * @return {number}
     */
    top() {
        return this.root.val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minVal[this.minVal.length - 1];
    }
}
