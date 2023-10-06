/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 双指针解决 n数之和问题
/**
 * 关键点：通过递归将n数之和问题转化为两数之和问题
 * 注意提前给数组排序
 * 注意重复元素的处理
 * 注意答案的收集方式
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    return nSumTarget(nums, 4, 0, target);
};

function nSumTarget(nums, n, start, target) {
    let len = nums.length;
    let res = [];
    if (n < 2 || n > len) {
        return res;
    }

    if (n === 2) {
        let left = start;
        let right = len - 1;
        while (left < right) {
            let leftVal = nums[left];
            let rightVal = nums[right];
            let sum = leftVal + rightVal;

            if (sum > target) {
                while (left < right && nums[right] === rightVal) {
                    right--;
                }
            } else if (sum < target) {
                while (left < right && nums[left] === leftVal) {
                    left++;
                }
            } else if (sum === target) {
                res.push([rightVal, leftVal]);
                while (left < right && nums[right] === rightVal) {
                    right--;
                }
                while (left < right && nums[left] === leftVal) {
                    left++;
                }
            }
        }
    } else {
        for (let i = start; i < len; i++) {
            let ans = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
            // ****** 注意 ******
            for (let arr of ans) {
                res.push([...arr, nums[i]]);
            }

            // ****** 注意 ******
            while (i < len && nums[i] === nums[i + 1]) i++;
        }
    }
    return res;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
let res = fourSum(nums, target);
console.log(res);
