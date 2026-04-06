class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        const queue = [];
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[0].length; column++) {
                if (grid[row][column] === 2) {
                    queue.push([row, column, 0]);
                }
            }
        }

        let max = 0;
        while(queue.length > 0) {
            const [row, column, minute] = queue.pop();

            max = Math.max(max, minute);
            for (let i = 0; i < directions.length; i++) {
                const direction = directions[i];
                const newRow = direction[0] + row;
                const newColumn = direction[1] + column;
                if (newRow >= grid.length || newRow < 0 || newColumn >= grid[0].length || newColumn < 0) {
                    continue;
                }
                if (grid[newRow][newColumn] === 1) {
                    queue.unshift([newRow, newColumn, minute + 1]);
                    grid[newRow][newColumn] = 2;
                }
            }
        }

        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[0].length; column++) {
                if (grid[row][column] === 1) {
                    return -1;
                }
            }
        } 
        return max;  
    }
}
