class Solution {
    /**
     * @param {number[]} startTime
     * @param {number[]} endTime
     * @param {number[]} profit
     * @return {number}
     */
    jobScheduling(startTime, endTime, profit) {
        const intervals = [];
        let mostProfit = 0;
        for (let i = 0; i < startTime.length; i++) {
            intervals.push({
                startTime: startTime[i],
                endTime: endTime[i],
                profit: profit[i],
            })
        }
        intervals.sort((a, b) => a.startTime - b.startTime)
        const cache = new Array(startTime.length).fill(-1);

        function dp(index) {
            if (index === intervals.length) {
                return 0;
            }
            if (cache[index] !== -1) {
                return cache[index]
            }

            const res = dp(index + 1);


            let j = index + 1;
            while (j < intervals.length && intervals[index].endTime > intervals[j].startTime) {
                j++;
            }
            cache[index] = Math.max(res, intervals[index].profit + dp(j));
            
            return cache[index]
        }
        return dp(0);
    }
}
