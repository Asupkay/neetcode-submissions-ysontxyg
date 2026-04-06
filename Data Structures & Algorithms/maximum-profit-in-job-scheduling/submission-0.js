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

        function dp(index, sum, endTime) {
            if (index >= intervals.length) {
                mostProfit = Math.max(sum, mostProfit);
                return;
            }
            const cInterval = intervals[index];
            if (cInterval.startTime >= endTime) {
                dp(index + 1, sum + cInterval.profit, cInterval.endTime);
            }
            dp(index + 1, sum, endTime);
        }
        dp(0, 0, 0);
        return mostProfit;
    }
}
