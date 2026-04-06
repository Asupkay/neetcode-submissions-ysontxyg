class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];

        let row = 0;
        let column = 0;
        const results = [];
        const cDirection = directions[0];

        function dfs(row, column, direction) {
            results.push(matrix[row][column]);
            matrix[row][column] = null;
            for(let i = 0; i < directions.length; i++) {
                const dIndex = (i + direction) % directions.length;
                const cDirection = directions[dIndex];
                if (matrix[row + cDirection[0]] && matrix[row + cDirection[0]][column + cDirection[1]] != null) {
                    dfs(row + cDirection[0], column + cDirection[1], dIndex);
                    break;
                }
            }
        }

        dfs(0, 0, 0)
        return results;
    }
}
