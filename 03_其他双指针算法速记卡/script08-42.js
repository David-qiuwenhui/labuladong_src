/**
 * @param {number[]} height
 * @return {number}
 */
// 左右双指针
var trap = function (height) {
    let n = height.length;

    let left = 0,
        right = n - 1;
    let leftMax = 0,
        rightMax = 0;
    let res = 0;

    for (let i = 0; i < n; i++) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const res = trap(height);
console.log(res);
