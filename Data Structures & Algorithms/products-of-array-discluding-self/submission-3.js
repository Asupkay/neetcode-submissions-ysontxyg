class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProduct = 1;
        const res = new Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            prefixProduct *= nums[i - 1];
            res[i] = prefixProduct;
        }
        let postfixProduct = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            postfixProduct *= nums[i + 1];
            res[i] = res[i] * postfixProduct;
        }
        return res;
    }
}
