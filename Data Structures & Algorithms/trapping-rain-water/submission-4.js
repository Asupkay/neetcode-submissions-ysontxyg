class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0;
        const prefixMax = [0];
        let cMax = 0;
        const postMax = [0];
        for (let i = 1; i < height.length; i++) {
            cMax = Math.max(cMax, height[i - 1]);
            prefixMax.push(cMax);
        }
        cMax = 0;
        for (let i = height.length - 2; i >= 0; i--) {
            cMax = Math.max(cMax, height[i + 1]);
            postMax.unshift(cMax);
        }
        console.log(prefixMax, postMax)
        for (let i = 0; i < height.length; i++) {
            const waterAmount = (Math.min(prefixMax[i], postMax[i]) - height[i]);
            if (waterAmount > 0) {
                maxWater += waterAmount;
            }
        }
        return maxWater;
    }
}
