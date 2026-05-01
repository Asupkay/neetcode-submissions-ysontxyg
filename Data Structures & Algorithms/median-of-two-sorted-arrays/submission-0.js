//[1, 2, 4]
//[3, 5, 6]
// total length 6 so we're looking for 3 and 4 to add them together and divide
// [1, 2]
// [3, 5, 6]
// Now we're just looking for number 3

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1;
        let b = nums2
        const medianLength = Math.floor((a.length + b.length)/2);

        if (a.length > b.length) {
            [a, b] = [b, a];
        }

        let l = 0;
        let r = a.length;

        while (l <= r) {
            const mid = Math.floor((r - l)/2) + l;
            const otherHalf = medianLength - mid;
            const endA = a[mid - 1] ?? -Infinity;
            const endB = b[otherHalf - 1] ?? -Infinity;
            const rightA = a[mid] ?? Infinity;
            const rightB = b[otherHalf] ?? Infinity;

            if (endB <= rightA && endA <= rightB) {
                if ((a.length + b.length) % 2 === 0) {
                    return (Math.max(endA, endB) + Math.min(rightA, rightB))/2
                } else {
                    return Math.min(rightA, rightB);
                }

            }

            if (endA > rightB) {
                r = mid - 1;
            } else {
                l = mid + 1
            }
        }
    }
}
