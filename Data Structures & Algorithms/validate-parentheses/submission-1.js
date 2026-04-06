class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    map = {
        '(':')',
        '{':'}',
        '[':']',
    }

    isValid(s) {
        const stack = [];
        for(const char of s) {
            if (this.map[char]) {
                stack.push(char);
                continue;
            }
            if (this.map[stack[stack.length - 1]] === char) {
                stack.pop();
                continue;
            }
            return false;
        }
        if (stack.length > 0) {
            return false;
        }
        return true;
    }
}
