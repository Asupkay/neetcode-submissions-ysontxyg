class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.get(key) === undefined) {
            this.keyStore.set(key, [[value, timestamp]])
            return;
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const history = this.keyStore.get(key)

        if (!history || history[0][1] > timestamp) {
            return "";
        }

        if (history[history.length - 1][1] <= timestamp) {
            return history[history.length - 1][0];
        }

        let p1 = 0;
        let p2 = history.length - 1;
        console.log(history)
        while(p1 < p2) {
            const mid = Math.ceil((p1 + p2)/2)
            console.log(p1, p2, mid, timestamp)
            const [value, oldTimestamp] = history[mid];
            if (timestamp < oldTimestamp) {
                p2 = mid - 1;
            } else {
                p1 = mid;
            }
        }
        return history[p1][0];
    }
}
