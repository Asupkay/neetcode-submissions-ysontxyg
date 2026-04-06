class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const options = [[]];
        function dfs(i, path) {
            if (i >= nums.length) {
                return;
            }

            path.push(nums[i])
            options.push([...path])
            dfs(i + 1, path);
            path.pop();
            dfs(i + 1, path);
        }
        dfs(0, []);
        console.log(options);

        return options;
    }
}
