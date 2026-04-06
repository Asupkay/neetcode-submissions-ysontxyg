class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        for (const num of nums) {
            total += num;
        }
        
        function dfs(sum, path) {
            if (sum === total - sum) {
                return true;
            }
            if (sum > total - sum) {
                return false;
            }

            for (let i = 0; i < nums.length; i++) {
                const cNum = nums[i];
                if (!path.has(i)) {
                    const result = dfs(sum + cNum, path.add(i))
                    if(result) {
                        return true;
                    }
                    path.delete(i)
                }
            }
            return false;
        }

        return dfs(0, new Set())
    }
}
