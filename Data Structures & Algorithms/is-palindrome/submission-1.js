class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');;

        if (s.length ===1 || s.length ===0) return true;
        return s[0] === s[s.length-1] && this.isPalindrome(s.slice(1, s.length-1))


    }
}
