class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((item) => `${item.length}#${item}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let len = parseInt(str.substring(i, j));
            result.push(str.substring(j + 1, j + 1 + len));
            i = j + 1 + len;
        }

        return result;
    }
}
