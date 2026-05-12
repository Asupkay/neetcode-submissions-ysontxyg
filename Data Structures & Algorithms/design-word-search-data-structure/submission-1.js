class WordDictionary {
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
    addWord(word) {
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
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node, position) {
            if (!node) {
                return false;
            }
            if (position === word.length) {
                return node.isEndOfWord;
            }

            const cChar = word[position];

            if (cChar === ".") {
                let found = false;
                for (const key of node.letters.keys()) {
                    found = found || dfs(node.letters.get(key), position + 1);
                }
                return found;
            } else {
                return dfs(node.letters.get(cChar), position + 1);
            }
        }
        return dfs(this.root, 0);
    }
}
