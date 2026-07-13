class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const numMap = {};
        for(let num of nums){
            if(numMap[num] !=null) numMap[num]+=1;
            else numMap[num] =1;
        }

       let e = Object.entries(numMap).sort((a,b)=> b[1]-a[1])

       return e.splice(0,k).map(it=>it[0])
    }
}
