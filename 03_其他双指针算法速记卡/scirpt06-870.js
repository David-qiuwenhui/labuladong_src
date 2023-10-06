/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 双指针
/**
 * 核心点是双指针策略
 * 需要提前对nums1进行排序
 * 按照nums2元素的大小顺序构建nums2的索引数组
 * nums1根据nums2的出场顺序移动双指针
 */
var advantageCount = function (nums1, nums2) {
    let n = nums1.length;
    nums1.sort((a, b) => b - a);

    let res = new Array(n).fill(0);
    let indexArr = res.map((item, index) => index);
    indexArr.sort((a, b) => nums2[b] - nums2[a]);

    let left = 0,
        right = n - 1;
    for (let i = 0; i < n; i++) {
        if (nums1[left] > nums2[indexArr[i]]) {
            res[indexArr[i]] = nums1[left++];
        } else {
            res[indexArr[i]] = nums1[right--];
        }
    }
    return res;
};

const nums1 = [2, 7, 11, 15];
const nums2 = [1, 10, 4, 11];
const res = advantageCount(nums1, nums2);
console.log(res);
