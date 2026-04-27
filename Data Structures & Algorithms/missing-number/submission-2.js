class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let num = 0;
        for (let i = 1; i <= nums.length; i++) {
            num  = num ^ i ^ nums[i-1];
        }

        return num;
    }
}
