class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          let anagramMap = {};
    for (let str of strs) {
        let charArr = new Array(26).fill(0)
        for (let i of str) {
            let charASCII = i.charCodeAt() - 'a'.charCodeAt();
            charArr[charASCII] += 1;
        }
        let key = String(charArr)
        if (anagramMap[key]) anagramMap[key] = [...anagramMap[key], str]
        else anagramMap[key] = [str]
    }
    return Object.values(anagramMap)

    }
}
