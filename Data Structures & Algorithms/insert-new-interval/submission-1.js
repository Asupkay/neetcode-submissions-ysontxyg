class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let p1 = 0;
        let p2 = intervals.length - 1;
        const newNum = newInterval[0];
        while (p1 <= p2) {
            const mid = Math.floor((p2 - p1)/2) + p1;
            const num = intervals[mid][0];
            console.log(num, newNum)
            if (num < newNum) {
                p1 = mid + 1;
            } else {
                p2 = mid - 1;
            }
        }
        
        intervals.splice(p1, 0, newInterval)

        const nArray = []
        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];
            console.log(nArray);
            if (nArray.length === 0 || nArray[nArray.length - 1][1] < interval[0]) {
                nArray.push(interval);
                continue;
            }
            nArray[nArray.length - 1][1] = Math.max(nArray[nArray.length - 1][1], interval[1]);
        }

        return nArray;
    }
}
