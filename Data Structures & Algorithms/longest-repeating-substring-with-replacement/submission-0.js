class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let replacementCount = 0;
        let maxLength = 0;
        const freq = new Map();
        let mostF = 0;
        let l = 0;

        for(let i = 0; i < s.length; i++) {
            const cChar = s[i];

            freq.set(cChar, (freq.get(cChar) ?? 0) + 1)
            mostF = Math.max(freq.get(cChar), mostF);

            while (i - l + 1 - mostF > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            maxLength = Math.max(maxLength, i - l + 1)

        }
        return maxLength;
        
    }
}
