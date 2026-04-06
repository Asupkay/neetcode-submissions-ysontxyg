class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    longestPalindrome(s) {
        let longestPalindrome = "";
        let palindromeLength = 0;
        const memo = {};
        function isPalindrome(s) {
            let p1 = 0;
            let p2 = s.length - 1;
            while(p1 < p2) {
                if (s[p1] !== s[p2]) {
                    return false
                }
                p1++;
                p2--;
            }
            return true;
        }

        function findLongest(s) {
            if (!s) {
                return;
            }
            if (memo[s]) {
                return;
            }
            memo[s] = true;
            if(isPalindrome(s) && s.length > palindromeLength) {
                longestPalindrome = s;
                palindromeLength = s.length;
                return;
            }
            console.log(s);
            findLongest(s.substring(0, s.length - 1))
            findLongest(s.substring(1, s.length));
        }
        findLongest(s);
        return longestPalindrome;
    }
}
