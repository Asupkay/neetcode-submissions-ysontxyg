class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        while (l <= r) {
            const mid = Math.floor((r - l)/2) + l;
            const canEat = this.kokoCanFinish(piles, mid, h);

            if (canEat) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }

    kokoCanFinish(piles, speed, h) {
        let cHours = 0;
        for (const pile of piles) {
            const timetoEat = Math.ceil(pile/speed);
            cHours += timetoEat;
        }

        return cHours <= h;
    }
}
