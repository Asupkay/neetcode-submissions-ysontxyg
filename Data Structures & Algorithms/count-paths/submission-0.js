class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const results = Array.from({length: m}, () => new Array(n));
        for (let i = 0; i < results.length; i++) {
            results[i][results[0].length - 1] = 1;
        }
        for (let i = 0; i < results[0].length; i++) {
            results[results.length - 1][i] = 1;
        }

        for (let j = results.length - 2; j >= 0; j--) {
            for (let i = results[0].length - 2; i >= 0; i--) {
                results[j][i] = results[j + 1][i] + results[j][i + 1];
            }
        }

        return results[0][0];
    }
}
