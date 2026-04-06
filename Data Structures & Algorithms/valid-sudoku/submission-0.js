class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const columns = new Array(9);
        const rows = new Array(9);
        const subBoxes = new Array(9);
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (columns[i] === undefined) {
                    columns[i] = new Set();
                }
                if(rows[j] === undefined) {
                    rows[j] = new Set();
                }
                const gridNum = Math.floor(i/3) + (Math.floor(j/3) * 3);
                if (subBoxes[gridNum] === undefined) {
                    subBoxes[gridNum] = new Set();
                }
                const num = board[i][j];
                if (num === ".") {
                    continue;
                }
                console.log(i, j, columns[i], rows[j], subBoxes[gridNum])
                if (columns[i].has(num) || rows[j].has(num) || subBoxes[gridNum].has(num)) {
                    return false;
                }
                columns[i].add(num);
                rows[j].add(num);
                subBoxes[gridNum].add(num);
            }
        }
        return true;
    }
}
