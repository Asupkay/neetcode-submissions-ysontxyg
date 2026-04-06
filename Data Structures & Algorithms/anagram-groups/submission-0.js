class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const anagrams = [];
        for (const str of strs) {
            const key = turnToKey(str);
            const anagramIndex = map.get(key);
            if (anagramIndex !== null && anagramIndex !== undefined) {
                anagrams[anagramIndex].push(str);
            } else {
                map.set(key, anagrams.length);
                anagrams.push([str]);
            }
        }
        return anagrams;
    }
}

function turnToKey(word) {
    const array = new Array(26).fill(0);
    for (const char of word) {
        const number = char.charCodeAt(0) - 'a'.charCodeAt(0);
        array[number]++;
    }
    return array.toString();
}
