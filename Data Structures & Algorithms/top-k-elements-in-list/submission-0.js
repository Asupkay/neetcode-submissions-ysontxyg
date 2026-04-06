class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums) {
            const mapOccurrences = map.get(num);
            map.set(num, mapOccurrences ? mapOccurrences + 1 : 1);
        }
        console.log(map);
        const sortedArray = new Array(nums.length);
        for (const key of map.keys()) {
            console.log(key)
            const occurrences = map.get(key);
            const occurrencesIndex = sortedArray[occurrences];
            if (occurrencesIndex) {
                occurrencesIndex.push(key);
            } else {
                sortedArray[occurrences] = [key];
            }
        }
        console.log(sortedArray)

        const mostOccurrences = [];
        for (let i = sortedArray.length - 1; i >= 0; i--) {
            const cIndex = sortedArray[i];
            if (!cIndex) {
                continue;
            }
            for (const letter of cIndex) {
                mostOccurrences.push(letter);
                if (mostOccurrences.length === k) {
                    break;
                }
            }
            if (mostOccurrences.length === k) {
                break;
            }
        }
        return mostOccurrences;


    }
}

