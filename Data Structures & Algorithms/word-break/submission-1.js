class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = {};
        function dfs(word) {
            if (memo[word] !== undefined) {
                return memo[word];
            }
            if (word.length > s.length) {
                return false;
            }
            if (word !== s.substring(0, word.length)) {
                return false;
            }
            if (word === s) {
                return true;
            }

            for (let i = 0; i < wordDict.length; i++) {
                const result = dfs(`${word}${wordDict[i]}`)
                memo[word] = result;
                if (result) {
                    return true;
                }
            }
            return false;

        }

        for (let i = 0; i < wordDict.length; i++) {
            const result = dfs(wordDict[i]);
            if (result) {
                return true;
            }
        }
        return false;
    }
}
