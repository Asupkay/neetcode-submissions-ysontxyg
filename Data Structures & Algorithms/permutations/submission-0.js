class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];

        function backtrack(perm, pick) {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (const num of nums) {
                if (pick[num] !== 1) {
                    pick[num] = 1;
                    perm.push(num);
                    backtrack(perm, pick);
                    pick[num] = 0;
                    perm.pop();
                }
            }
        }
        backtrack([], []);
        return res;
    }
}
