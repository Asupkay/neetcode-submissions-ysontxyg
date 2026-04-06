class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const array = new Array(50000).fill(0);
        for (let num of nums) {
            array[num] += 1;
            if(array[num] > Math.floor(nums.length/2)) {
                return num;
            }

        }
    }
}
