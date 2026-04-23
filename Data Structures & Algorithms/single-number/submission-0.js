class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let cNum = 0;

        for (const num of nums) {
            cNum = cNum ^ num;
        }
        return cNum;
    }
}
