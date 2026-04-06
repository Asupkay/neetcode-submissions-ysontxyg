class Solution {
    charIndex(c) {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return code - 65;        // A-Z → 0-25
        } else {
            return code - 97 + 26;   // a-z → 26-51
        }
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const occurrences = new Array(52).fill(0);
        for (let i = 0; i < t.length; i++) {
            occurrences[this.charIndex(t[i])]++;
        }
        const id = occurrences.toString();

        console.log(occurrences);

        let length = 1;
        const seenArray = Array.from({length: s.length}, () => new Array(52).fill(0));
        while (length <= s.length) {
            for (let i = 0; i + length <= s.length; i++) {
                const prevSeen = seenArray[i];
                const tOccurrences = occurrences[this.charIndex(s[i + length - 1])];
                const prevSOccurrences = prevSeen[this.charIndex(s[i + length - 1])];
                if (tOccurrences > 0 && prevSOccurrences < tOccurrences) {
                    prevSeen[this.charIndex(s[i + length - 1])]++;
                }
                if (prevSeen.toString() === id) {
                    let result = "";
                    for (let j = 0; j < length; j++) {
                        result = `${result}${s[i + j]}`
                    }
                    return result;
                }
            }
            length++;
        }
        return "";

    }
}
