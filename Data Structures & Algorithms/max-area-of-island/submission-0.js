class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        function dfs(i, j) {
            if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
                return 0;
            }

            grid[i][j] = 0;
            const a1 = dfs(i + 1, j);
            const a2 = dfs(i, j + 1);
            const a3 = dfs(i - 1, j);
            const a4 = dfs(i, j - 1);
            return a1 + a2 + a3 + a4 + 1;
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    const area = dfs(i, j);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }
        return maxArea;
    }
}
