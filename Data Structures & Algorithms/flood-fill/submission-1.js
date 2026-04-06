class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const directions = [[0, 1],[1, 0],[-1, 0], [0, -1]];
        const startingPixel = image[sr][sc];
        if (startingPixel === color) {
            return image;
        }

        function dfs(x, y) {
            if (image[x] === undefined || image[x][y] === undefined || image[x][y] !== startingPixel) {
                return;
            }
            image[x][y] = color;
            for (let i = 0; i < directions.length; i++) {
                const cDir = directions[i];
                dfs(x + cDir[0], y + cDir[1]);
            }
        }

        dfs(sr, sc)

        return image;
    }
}
