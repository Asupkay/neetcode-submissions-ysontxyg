class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const cVal = grid[i][j];
                if (cVal === "1") {
                    count++;
                    this.clearIsland(grid, i, j);
                }
            }
        }
        return count;
    }

    clearIsland(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {

            return;
        }
        grid[i][j] = "0";
        this.clearIsland(grid, i - 1, j);
        this.clearIsland(grid, i, j - 1);
        this.clearIsland(grid, i + 1, j);
        this.clearIsland(grid, i, j + 1);
    }
}
