class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const freq = new Map();
        const bigArray = [];
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            const cNum = nums[i];
            freq.set(cNum, (freq.get(cNum) || 0) + 1);
            while(bigArray.length !== 0 && nums[bigArray[bigArray.length - 1]] < cNum) {
                bigArray.pop();
            }
            bigArray.push(i);

            if (i - k + 1 < 0) {
                continue;
            }
            
            if (bigArray[0] < i - k + 1) bigArray.shift();

            res.push(nums[bigArray[0]]);
        }

        return res;
    }
}
