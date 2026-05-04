class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        for (let i = digits.length - 1; i >= 0; i--) {
            const cDigit = digits[i];
            if (cDigit < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        digits.unshift(1)
        return digits;
    }
}
