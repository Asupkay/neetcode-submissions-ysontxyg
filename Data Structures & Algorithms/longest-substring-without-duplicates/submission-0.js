class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let longest = 0;
        let length = 0;
        for (const char of s) {
            if (set.has(char)) {
                set = new Set();
                length = 0;
            }
            set.add(char);
            length++;
            if (length > longest) {
                longest = length;
            }
        }
        return longest;
    }
}
