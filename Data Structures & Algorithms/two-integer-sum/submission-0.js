class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const cNum = nums[i];
            const targetIndex = map.get(cNum);
            if (targetIndex !== null && targetIndex !== undefined) {;
                return [targetIndex, i];
            }
            map.set(target - cNum, i)
            console.log(map)
        }
        return [];
    }
}
