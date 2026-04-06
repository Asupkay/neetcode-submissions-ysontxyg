class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const queue = [];
        const map = {};
        const r = [];
        for (const num of nums) {
            if (num <= target) {
                const id = new Array(31).fill(0);
                id[num] = 1;
                if (map[id.toString()] === true) {
                    continue;
                }
                queue.unshift({
                    id,
                    path: [num],
                    sum: num
                })
                map[id.toString()] = true;
            }
        }

        while(queue.length > 0) {
            const { id, path, sum } = queue.pop();
            if (sum === target) {
                r.push(path);
                continue;
            }
            for (const num of nums) {
                console.log(sum, num, target, queue.length);
                if (num + sum <= target) {
                    const idCopy = [...id];
                    const pathCopy = [...path];
                    
                    idCopy[num]++;
                    pathCopy.push(num);
                    if (map[idCopy.toString()] === true) {
                        continue;
                    }
                    queue.unshift({
                        id: idCopy,
                        path: pathCopy,
                        sum: sum + num
                    })
                    map[idCopy.toString()] = true;
                }
            }
        }
        return r;
    }
}
