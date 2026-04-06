class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = {};
        function dfs(len) {
            if (memo[len] !== undefined) {
                return memo[len];
            }
            if (len === s.length) {
                return true;
            }

            for (let i = 0; i < wordDict.length; i++) {
                const w = wordDict[i];
                if (s.substring(len, len + w.length) === w) {
                    const result = dfs(len + w.length)
                    if (result) {
                        memo[len] = true;
                        return true;
                    }
                }
            }
            memo[len] = false;
            return false;

        }

        return dfs(0);
    }
}
