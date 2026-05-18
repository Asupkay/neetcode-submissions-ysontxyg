class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const fullCost = new Array(cost.length);
        fullCost[0] = cost[0];
        fullCost[1] = cost[1];
        for (let i = 2; i < cost.length; i++) {
            fullCost[i] = Math.min(fullCost[i - 1], fullCost[i - 2]) + cost[i];
        }
        return Math.min(fullCost[fullCost.length - 1], fullCost[fullCost.length - 2]);
    }
}
