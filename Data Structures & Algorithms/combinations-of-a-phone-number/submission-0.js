class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const results = [];
        
        const letters = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t','u','v'],
            9: ['w','x','y','z']
        }

        if (digits.length === 0) {
            return [];
        }

        function dfs(i, path) {
            if (i >= digits.length) {
                results.push(path)
                return;
            }

            const options = letters[digits[i]];
            for (let j = 0; j < options.length; j++) {
                dfs(i + 1, `${path}${options[j]}`)
            }
        }

        dfs(0, "")
        return results;
    }
}
