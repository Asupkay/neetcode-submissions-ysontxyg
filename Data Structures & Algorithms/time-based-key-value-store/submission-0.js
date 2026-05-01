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
        this.keyStore.set(key, [value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const [val, oldTimestamp] = this.keyStore.get(key)
        if (timestamp >= oldTimestamp) {
            return val;
        }
        return "";
    }
}
