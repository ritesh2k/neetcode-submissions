class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let maxLen = 0;
        for(let num of nums){
            if(!numSet.has(num-1)){
                let len =1;
                while(numSet.has(num+len)){
                    len++
                }
            maxLen = Math.max(maxLen,len)
            }

        }
        return maxLen
    }
}
