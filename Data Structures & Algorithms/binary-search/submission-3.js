class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function searchHelper(start, end, target) {
        let mid = Math.floor((start+end) / 2);

         
            if(start>=end) return -1;

            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] < target) return searchHelper(mid+1,end, target);
            else return searchHelper(start, mid, target);
        }

       return searchHelper(0, nums.length,target);
    }
}
