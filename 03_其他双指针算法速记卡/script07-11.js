/**
 * @param {number[]} height
 * @return {number}
 */
// 左右双指针
var maxArea = function (height) {
    let left = 0,
        right = height.length - 1;
    let res = 0;

    while (left < right) {
        let curArea = Math.min(height[left], height[right]) * (right - left);
        res = Math.max(res, curArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const res = maxArea(height);
console.log(res);
