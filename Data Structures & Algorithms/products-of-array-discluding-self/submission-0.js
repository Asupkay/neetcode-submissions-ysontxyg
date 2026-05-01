class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let fullSum = null;
        let numZeros = 0;
        for (const num of nums) {
            if (!fullSum) {
                fullSum = num;
                continue;
            }
            if (num === 0) {
                numZeros++;
                continue;
            }
            fullSum *= num;
        }
        console.log(fullSum);
        const nArray = [];
        for (const num of nums) {
            if (numZeros === 1) {
                if (num === 0) {
                    nArray.push(fullSum)
                } else {
                    nArray.push(0);
                }
                continue;
            } else if(numZeros >= 2) {
                nArray.push(0);
                continue;
            }
            nArray.push(fullSum/num);
        }
        return nArray;
    }
}
