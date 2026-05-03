class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const visited = new Set();

        let cNum = n;
        while(cNum !== 1) {
            console.log(cNum);
            if (visited.has(cNum)) {
                return false;
            }
            visited.add(cNum);
            let tempNum = 0;
            for(let char of String(cNum)) {
                tempNum += Math.pow(parseInt(char), 2);
            }
            cNum = tempNum;
        }
        return true;
    }
}
