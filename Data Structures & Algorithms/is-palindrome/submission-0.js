class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            if (!isAlphanumeric(s[i])) {
                i++
                continue;
            }
            if (!isAlphanumeric(s[j])) {
                j--;
                continue;
            }
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++
            j--
        }
        return true;
    }
}

function isAlphanumeric(char) {
  // The pattern /[a-z0-9]/i checks for any lowercase letter (a-z), 
  // any digit (0-9), or any uppercase letter due to the 'i' (case-insensitive) flag.
  return /[a-z0-9]/i.test(char); 
}
