class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;
        let set1 = {};
        let set2 = {};

        for(let char of s){
            if(set1[char]) set1[char]+=1;
            else set1[char] =1;
        }


        for(let char of t){
            if(set2[char]) set2[char]+=1;
            else set2[char] =1;
        }

        for(let key in set1){
            if(set1[key] !== set2[key]) return false
        }
        return true;    

    }
}
