class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let mostArea = 0;
        let p1 = 0;
        let p2 = heights.length - 1;
        while (p1 < p2) {
            const h1 = heights[p1];
            const h2 = heights[p2];
            const area = (p2 - p1) * Math.min(h1, h2);
            mostArea = Math.max(mostArea, area);
            if (h1 >= h2) {
                p2--;
            } else {
                p1++;
            }
        }
        return mostArea;
    }
}
