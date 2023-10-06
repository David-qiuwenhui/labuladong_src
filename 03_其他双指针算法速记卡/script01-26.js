/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢双指针
var removeDuplicates = function (nums) {
    let n = nums.length;
    if (n === 0) return 0;
    let slow = 0,
        fast = 0;
    while (fast < n) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
};

let nums = [1, 1, 2];
let res = removeDuplicates(nums);
console.log(res);
