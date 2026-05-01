class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const occurrences = new Array(52).fill(0);
        for (let i = 0; i < t.length; i++) {
            occurrences[t.charCodeAt(i) - 'A'.charCodeAt(0)]++;
        }
        const id = occurrences.toString();

        console.log(occurrences);

        let length = 1;
        const seenArray = Array.from({length: s.length}, () => new Array(52).fill(0));
        while (length <= s.length) {
            for (let i = 0; i + length <= s.length; i++) {
                const prevSeen = seenArray[i];
                const tOccurrences = occurrences[s.charCodeAt(i + length - 1) - 'A'.charCodeAt(0)];
                const prevSOccurrences = prevSeen[s.charCodeAt(i + length - 1) - 'A'.charCodeAt(0)];
                if (tOccurrences > 0 && prevSOccurrences < tOccurrences) {
                    prevSeen[s.charCodeAt(i + length - 1) - 'A'.charCodeAt(0)]++;
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
