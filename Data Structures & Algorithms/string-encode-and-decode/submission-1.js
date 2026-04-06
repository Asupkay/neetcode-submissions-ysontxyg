class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalString = "";
        for (const string of strs) {
            finalString += `${string.length}#${string}`;
        }
        return finalString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let isWord = false;
        const words = [];
        let cLength = 0;
        let lengthString = "";
        console.log(str);
        for (const char of str) {
            console.log(char, cLength, words, isWord)
            if (cLength === 0) {
                isWord = false;
            }
            if (!isWord && char === "#") {
                isWord = true;
                cLength = parseInt(lengthString);
                words.push("");
                lengthString = "";
                continue;
            }
            if (!isWord) {
                lengthString += char
                continue;
            }
            words[words.length - 1] += char;
            cLength--;
        }
        return words;
    }
}
