/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 34 二分查找变体 左右边界
var searchRange = function (nums, target) {
    const leftBound = findLeftbound(nums, target);
    const rightBound = findRightbound(nums, target);
    return [leftBound, rightBound];
};
function findLeftbound(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        // let mid = (left + right) >> 1;
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }

    if (left < 0 || left >= nums.length) {
        return -1;
    }

    return nums[left] === target ? left : -1;
}

function findRightbound(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        // let mid = (left + right) >> 1;
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }

    if (right < 0 || right >= nums.length) {
        return -1;
    }

    return nums[right] === target ? right : -1;
}

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
const res = searchRange(nums, target);
console.log(res);
