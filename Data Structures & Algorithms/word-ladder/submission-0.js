class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (wordList.indexOf(endWord) === -1) {
            return 0;
        }

        const patterns = new Map();
        wordList.push(beginWord);

        for (let i = 0; i < wordList.length; i++) {
            let cWord = wordList[i];
            for (let m = 0; m < cWord.length; m++) {
                let copy = cWord;
                copy = copy.substring(0, m) + '*' + copy.substring(m + 1);
                if (patterns.get(copy) !== undefined) {
                    patterns.get(copy).push(cWord);
                } else {
                    patterns.set(copy, [cWord]);
                }
            }
        }
        
        const visited = new Set([beginWord]);
        const queue = [[beginWord, 1]];
        while(queue.length > 0) {
            const [cWord, height] = queue.pop();
            if (cWord === endWord) {
                return height;
            }

            for (let m = 0; m < cWord.length; m++) {
                const copy = cWord.substring(0, m) + '*' + cWord.substring(m + 1);
                const neighbors = patterns.get(copy);

                if (!neighbors) {
                    continue;
                }

                for (let i = 0; i < neighbors.length; i++) {
                    const cNeighbor = neighbors[i];
                    if (visited.has(cNeighbor)) {
                        continue;
                    }
                    queue.push([cNeighbor, height + 1])
                    visited.add(cNeighbor)
                }
            }
        }

        return 0;
    }
}
