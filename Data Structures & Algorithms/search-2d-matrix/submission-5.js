class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length * matrix[0].length - 1;

        while(l <= r) {
            const mid = Math.floor((r - l)/2) + l;

            const row = Math.floor(mid / matrix[0].length)
            const column = mid % matrix[0].length

            if (matrix[row][column] === target) {
                return true;
            }
            if (matrix[row][column] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return false;

    }
}
