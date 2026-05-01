class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const stack = [];
        let maxHeight = 0;

        for (let i = 0; i <= n; i++) {
            while(stack.length && (i === n || heights[stack[stack.length - 1]] > heights[i])) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
                maxHeight = Math.max(maxHeight, width * height)
            }
            stack.push(i)
        }

        return maxHeight;
    }
}
