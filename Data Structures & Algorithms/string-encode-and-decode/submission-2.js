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
        const res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i,j));
            i = j + length + 1;
            j = j + 1;
            res.push(str.substring(j, i));
        }
        return res;
    }
}
