class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let p1 = 0;
        for (let i = 0; i < t.length; i++) {
            if (s[p1] === t[i]) {
                p1++;
            }
        }
        return p1 === s.length
    }
}
