class MyQueue {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        const tempStack = [];
        while (this.stack.length > 0) {
            tempStack.push(this.stack.pop());
        }
        const val = tempStack.pop();
        while (tempStack.length > 0) {
            this.stack.push(tempStack.pop())
        }
        return val;
    }

    /**
     * @return {number}
     */
    peek() {
        return this.stack[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
