/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 左右双指针
/**
 * 关键点：防当前值和指针重复
 * 解决问题前需要对数组进行排序操作
 */
var threeSum = function (nums) {
    // base case
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        movePointer(i, nums, n, res);
    }

    return res;
};

function movePointer(i, nums, n, res) {
    let left = i + 1,
        right = nums.length - 1;

    while (left < right) {
        let leftVal = nums[left];
        let rightVal = nums[right];
        let sum = n + leftVal + rightVal;
        if (sum > 0) {
            while (left < right && nums[right] === rightVal) {
                right--;
            }
        } else if (sum < 0) {
            while (left < right && nums[left] === leftVal) {
                left++;
            }
        } else {
            res.push([n, leftVal, rightVal]);
            while (left < right && nums[left] === leftVal) {
                left++;
            }
            while (left < right && nums[right] === rightVal) {
                right--;
            }
        }
    }
}
const nums = [-1, 0, 1, 2, -1, -4];
let res = threeSum(nums);
console.log(res);
