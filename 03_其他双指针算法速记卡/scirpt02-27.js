/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 快慢双指针
var removeElement = function (nums, val) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let slow = 0,
        fast = 0;
    while (fast < n) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

let nums = [3, 2, 2, 3];
const val = 3;
let res = removeElement(nums, val);
console.log(res);
console.log(nums);
