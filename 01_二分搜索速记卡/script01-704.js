/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 704 二分查找
var search = function (nums, target) {
    const len = nums.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 9;

const nums = [5];
const target = 5;

const res = search(nums, target);
console.log(res);
