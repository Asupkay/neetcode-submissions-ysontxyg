class PrefixTree {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if (!this.map.get(word[0])) {
            this.map.set(word[0], {children: new Map(), isEndOfWord: false});
        }

        let cNode = this.map.get(word[0]);
        for (let i = 1; i < word.length; i++) {
            const cChar = word[i];
            if (!cNode.children.get(cChar)) {
                cNode.children.set(cChar, {children: new Map(), isEndOfWord: false})
            }
            cNode = cNode.children.get(cChar);
        }
        cNode.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cNode = this.map.get(word[0]);
        for (let i = 1; i < word.length; i++) {
            const cChar = word[i];
            if (!cNode.children.get(cChar)) {
                return false
            }
            cNode = cNode.children.get(cChar);
        }
        return cNode.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cNode = this.map.get(prefix[0]);

        if (!cNode) {
            return false;
        }
        for (let i = 1; i < prefix.length; i++) {
            const cChar = prefix[i];
            if (!cNode.children.get(cChar)) {
                return false
            }
            cNode = cNode.children.get(cChar);
        }
        return !!cNode;
    }
}
