/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 35 二分查找变体 左右边界
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return left;
};

const nums = [1, 3, 5, 6];
const target = 2;
const res = searchInsert(nums, target);
console.log(res);
