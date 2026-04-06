class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let fullSum = null;
        let numZeros = 0;
        for (const [index, num] of nums.entries()) {
            if (fullSum === null) {
                fullSum = num;
            } 
            if (num === 0) {
                numZeros++;
                continue;
            }
            if (index !== 0){
                fullSum *= num;
            }
        }
        console.log(fullSum, numZeros);
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
