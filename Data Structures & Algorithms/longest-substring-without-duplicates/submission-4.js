class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let longest = 0;

        let p1 = 0;
        for (let i = 0; i < s.length; i++) {
            const cChar = s[i];
            if (map.get(cChar) !== undefined && map.get(cChar) >= p1) {
                p1 = map.get(cChar) + 1
            }
            map.set(cChar, i);
            longest = Math.max(i - p1 + 1, longest)
        }
        return longest;
    }
}
