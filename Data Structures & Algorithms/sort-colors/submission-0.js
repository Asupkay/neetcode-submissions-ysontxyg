class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const colors = new Array(3).fill(0);
        for (let i = 0; i < nums.length; i++) {
            const cColor = nums[i];
            colors[cColor]++;
        }
        for (let i = 0; i < nums.length; i++) {
            if (colors[0] > 0) {
                nums[i] = 0;
                colors[0]--;
            } else if (colors[1] > 0) {
                nums[i] = 1;
                colors[1]--;
            } else {
                nums[i] = 2;
                colors[2]--;
            }
        }
    }
}
