class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const totalProduct = nums.reduce((acc, cur) => acc * (cur || 1), 1);
        const isZero = nums.filter(item => item === 0);

        return nums.map((item) => {
            if (isZero.length > 1) return 0;
            return item === 0 ? totalProduct : (totalProduct / item) * (isZero.length ? 0 : 1);
        });
    }
}
