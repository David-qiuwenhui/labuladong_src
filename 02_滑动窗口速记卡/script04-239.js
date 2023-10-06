/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 239 单调队列
var maxSlidingWindow = function (nums, k) {
    let window = new monotonic();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            window.push(nums[i]);
        } else {
            window.push(nums[i]);
            res.push(window.max());
            window.pop(nums[i - (k - 1)]);
        }
    }
    return res;
};
function monotonic() {
    let queue = [];

    this.push = function (n) {
        while (queue.length && n > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(n);
    };

    this.pop = function (n) {
        if (queue[0] === n) {
            queue.shift();
        }
    };

    this.max = function () {
        return queue[0];
    };
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const res = maxSlidingWindow(nums, k);
console.log(res);
