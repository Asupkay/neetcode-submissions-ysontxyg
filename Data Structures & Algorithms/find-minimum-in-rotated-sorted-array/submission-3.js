// [3, 4, 6, 1, 2]
// 6 compare with 3 we know left is sorted min is in unsorted always?
// [1, 2, 3, 4, 6]
// 3 compare with 1 we think is it in right but this is fully sorted
// [2, 3, 4, 6, 1]
// 4 left sorted go l = mid + 1 get 6 go right, they are equal we return
// [4, 6, 1, 2, 3]
// 1 left is not sorted so r = mid get 6 left sorted l = mid + 1 now equal, return
// [3, 4, 5, 1, 2]
// 5 left is sorted so l = mid + 1 l is equal so we go right again
// [4, 5, 6, 7, 0, 1, 2]
// 7 go l = mid + 1 get 1


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        while(l < r) {
            if (nums[l] < nums[r]) {
                return nums[l];
            }
            const mid = Math.floor((r-l)/2) + l;
            const cNum = nums[mid];
            if (cNum >= nums[l]) {
                /*if (mid === l) {
                    return nums[mid] < nums[r] ? nums[mid] : nums[r]
                }*/
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return nums[l];
    }
}
