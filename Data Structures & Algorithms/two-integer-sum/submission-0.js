class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = {};
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (set[nums[i]]!=null) return [set[nums[i]], i];
            else set[diff] = i;
        }
    }
}
