class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let p1 = 0;
        let p2 = nums.length - 1;
        while (p1 < p2) {
            const mid = p1 + Math.floor((p2 - p1)/2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] >= nums[p1]) {
                if (target >= nums[p1] && target < nums[mid]) {
                    p2 = mid - 1;
                } else {
                    p1 = mid + 1;
                }
            } else {
                if (target <= nums[p2] && target > nums[mid]) {
                    p1 = mid + 1;
                } else {
                    p2 = mid - 1;
                }

            }
        }
        return nums[p1] === target ? p1 : -1;
    }
}
