/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 0; i < intervals.length - 1; i++) {
                    console.log(intervals[i], intervals[i+1])

            const {end: i1End} = intervals[i];
            const {start: i2Start} = intervals[i + 1];

            if (i1End > i2Start) {
                return false;
            }
        }
        return true;
    }
}
