class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let longest = 0;
        let length = 0;
        for (const [index,char] of s.split("").entries()) {
            if (map.get(char) !== undefined) {
                const pos = map.get(char);
                length = index - (pos + 1);
            }
            map.set(char, index);
            length++;
            if (length > longest) {
                longest = length;
            }
        }
        return longest;
    }
}
