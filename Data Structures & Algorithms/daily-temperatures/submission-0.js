class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const cTemp = temperatures[i];
            if (stack.length === 0) {
                stack.push([cTemp, i]);
                continue;
            }

            while (stack.length > 0 && stack[stack.length - 1][0] < cTemp) {
                const [pastTemp, pastTempIndex] = stack.pop();
                res[pastTempIndex] = i - pastTempIndex;
            }
            stack.push([cTemp, i])

        }
        return res;
    }
}
