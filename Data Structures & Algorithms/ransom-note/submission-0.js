class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const letters = new Array(26).fill(0);
        for (const letter of magazine) {
            letters[letter.charCodeAt() - 'a'.charCodeAt()] += 1;
        }
        console.log(letters);
        for (const letter of ransomNote) {
            if (letters[letter.charCodeAt() - 'a'.charCodeAt()] === 0) {
                return false;
            }
            letters[letter.charCodeAt() - 'a'.charCodeAt()] -= 1;
        }
        return true;
    }
}
