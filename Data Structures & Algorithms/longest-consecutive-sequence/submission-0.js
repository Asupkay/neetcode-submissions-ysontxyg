class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        let longest = 0;
        for (const num of nums) {
            set.add(num);
        }
        for (const num of nums) {
            const isBeginning = !(set.has(num - 1));
            if (!isBeginning) {
                continue;
            }
            let count = 1;
            while(set.has(num + count)) {
                count++;
            }
            longest = Math.max(longest, count);
        }
        return longest;
    }
}
