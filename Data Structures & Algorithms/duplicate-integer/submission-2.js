class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for (let i = 0; i < nums.length; i++) {
            const cNum = nums[i];
            if (set.has(cNum)) {
                return true;
            }
            set.add(cNum)
        }
        return false;

    }
}
