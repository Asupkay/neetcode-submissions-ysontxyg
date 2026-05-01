class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const positionSpeed = position.map((p, i) => [p, speed[i]]);
        positionSpeed.sort((a, b) => a[0] - b[0]);
        for (let i = position.length - 1; i >= 0; i--) {
            const carSpeed = positionSpeed[i][1];
            const carPosition = positionSpeed[i][0];
            const arrivalTime = (target - carPosition)/carSpeed

            if (stack.length === 0 || stack[stack.length - 1] < arrivalTime) {
                stack.push(arrivalTime);
            }
        }
        return stack.length;

    }
}
