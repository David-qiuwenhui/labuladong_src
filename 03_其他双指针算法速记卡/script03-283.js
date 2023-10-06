/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢双指针
var moveZeroes = function (nums) {
    let n = nums.length;
    if (n === 0) return;
    let left = 0,
        right = 0;

    while (right < n) {
        if (nums[right] !== 0) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }

    addZeros(nums, left);
};

function addZeros(nums, start) {
    for (let i = start; i < nums.length; i++) {
        nums[i] = 0;
    }
}

let nums = [0, 1, 0, 3, 12];
let res = moveZeroes(nums);
console.log(nums);
