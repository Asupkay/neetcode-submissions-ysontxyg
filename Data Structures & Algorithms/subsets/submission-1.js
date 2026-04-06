class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const options = [];
        function dfs(i, path) {
            if (i >= nums.length) {
                options.push([...path]);
                return;
            }

            path.push(nums[i])
            dfs(i + 1, path);
            path.pop();
            dfs(i + 1, path);
        }
        dfs(0, []);

        return options;
    }
}
