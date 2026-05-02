class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {character}
     */
    findTheDifference(s, t) {
        let tracker = 0;
        for (const char of s) {
            tracker = tracker ^ char.charCodeAt(0);
        }
        for (const char of t) {
            tracker = tracker ^ char.charCodeAt(0);
        }

        return String.fromCharCode(tracker);
    }
}
