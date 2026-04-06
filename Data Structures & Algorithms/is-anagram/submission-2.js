class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            const cChar = s[i];
            const cVal = map.get(cChar) ?? 0;
            map.set(cChar, cVal + 1);   
        }
        for (let i = 0; i < t.length; i++) {
            const cChar = t[i];
            const cVal = map.get(cChar);
            if (!cVal) {
                return false;
            }
            map.set(cChar, cVal - 1);
        }
        console.log(map)
        return true;
    }
}
