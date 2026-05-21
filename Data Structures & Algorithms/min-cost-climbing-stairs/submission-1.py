class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        fullCost = [-1] * len(cost);
        fullCost[0] = cost[0]
        fullCost[1] = cost[1]
        for i in range(2, len(cost)):
            fullCost[i] = min(fullCost[i - 1], fullCost[i - 2]) + cost[i]
        return min(fullCost[-1], fullCost[-2])
        