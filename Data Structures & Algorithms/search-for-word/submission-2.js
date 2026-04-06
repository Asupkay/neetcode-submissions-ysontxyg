class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const queue = [];
        
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[0].length; column++) {
                if (board[row][column] === word[0]) {
                    const result = this.findWord(board, word, row, column);
                    if (result) {
                        return true;
                    }

                }
            }
        }
        return false;

    }

    findWord(board, word, row, column) {
        console.log(row, column)
        const directions = [[-1, 0],[0, 1],[0, -1],[1, 0]];
        let hasWord = false;

        function dfs(row, column, index, visited) {
            const cLetter = board[row][column];

            if (cLetter !== word[index]) {
                return;
            }
            if (index === word.length - 1) {
                hasWord = true;
                return;
            }
            visited.add(`${row},${column}`)

            for(const direction of directions) {
                const nRow = row + direction[0];
                const nColumn = column + direction[1];
                if (visited.has(`${nRow},${nColumn}`) || nRow >= board.length || nRow < 0 || nColumn >= board[0].length || nColumn < 0) {
                    continue;
                }
                dfs(nRow, nColumn, index + 1, visited)
            }
            visited.delete(`${row},${column}`)
        }

        dfs(row, column, 0, new Set());
        return hasWord;

    }
}
