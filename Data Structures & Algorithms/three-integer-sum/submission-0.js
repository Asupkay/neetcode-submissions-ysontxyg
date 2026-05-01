class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const results = [];
        nums.sort();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let p1 = i + 1;
            let p2 = nums.length - 1;
            while(p2 > p1) {
                const threeSum = nums[p2] + nums[p1] + num;
                if (threeSum < 0) {
                    p1++;
                }
                if (threeSum > 0) {
                    p2--;
                }
                if (threeSum === 0) {
                    results.push([nums[p2], nums[p1], num]);
                    p1++;
                    p2--;
                    while (p1 < p2 && nums[p1] === nums[p1-1]) {
                        p1++;
                    }
                } 
            }
        }
        return results;
    }
}
