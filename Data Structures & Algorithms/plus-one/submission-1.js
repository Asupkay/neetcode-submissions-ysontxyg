class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let pos = digits.length - 1;
        while(true) {
            const cDigit = digits[pos];
            if (cDigit === undefined) {
                digits.unshift(1)
                return digits;
            }
            if (cDigit === 9) {
                digits[pos] = 0;
            } else {
                digits[pos]++;
                return digits;
            }
            pos--;
        }
    }
}
