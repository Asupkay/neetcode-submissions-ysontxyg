class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Occurrences = new Array(26).fill(0);

        for (const char of s1) {
            s1Occurrences[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const s2Occurrences = new Array(26).fill(0);

        for (let i = 0; i < s2.length; i++) {
            s2Occurrences[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            if (i < s1.length - 1) {
                continue;
            }
            if (s2[i - s1.length] !== undefined) {
                s2Occurrences[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
            }

            let matches = true;
            for (let j = 0; j < s2Occurrences.length; j++) {
                if (s2Occurrences[j] !== s1Occurrences[j]) {
                    matches = false;
                    break;
                } 
            }

            if (matches) {
                return true;
            }

        }
        return false;
    }
}
