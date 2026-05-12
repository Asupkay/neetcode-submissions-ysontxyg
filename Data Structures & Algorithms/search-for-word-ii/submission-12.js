class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new TrieTree();
        for (const word of words) {
            trie.insert(word);
        }

        const res = [];

        for (let column = 0; column < board.length; column++) {
            for (let row = 0; row < board[0].length; row++) {
                res.push(...trie.searchGrid(column, row, board));
            }
        }

        return res;
    }
}

class TrieTree {
    constructor() {
        this.root = {
            letters: new Map(),
            isEndOfWord: false
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cNode = this.root;
        for (const char of word) {
            if(!cNode.letters.get(char)) {
                cNode.letters.set(char, {
                    letters: new Map(),
                    isEndOfWord: false
                })
            }
            cNode = cNode.letters.get(char)
        }
        cNode.isEndOfWord = true;
        cNode.fullWord = word;
    }

    searchGrid(startColumn, startRow, board) {
        const results = [];

        const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        function dfs(column, row, node, path = new Set()) {
            if (!node || column < 0 || column >= board.length || row < 0 || row >= board[0].length) {
                return false;
            }
            const key = `${column},${row}`;
            const cLetter = board[column][row]

            if (cLetter === "*") {
                return false;
            }

            const cNode = node.letters.get(cLetter);
            if (!cNode) return;

            if (cNode.isEndOfWord) {
                results.push(cNode.fullWord);
                cNode.isEndOfWord = false;
            }

            board[column][row] = "*"
            for (const dir of directions) {
                const newColumn = column + dir[0];
                const newRow = row + dir[1];

                dfs(newColumn, newRow, cNode, path.add(key))
            }
            board[column][row] = cLetter;
        }

        dfs(startColumn, startRow, this.root)
        return results;
    }
}
