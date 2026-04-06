class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            if (["+", "-", "*", "/"].includes(token)) {
                const num1 = stack.pop();
                const num2 = stack.pop();
                console.log(stack, num1, num2);
                switch(token) {
                    case '+':
                        stack.push(num2 + num1);
                        break;
                    case '-':
                        stack.push(num2 - num1);
                        break;
                    case '*':
                        stack.push(num2 * num1);
                        break;
                    case '/':
                        stack.push(Math.trunc(num2 / num1));
                        break;
                }
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop();
    }
}
