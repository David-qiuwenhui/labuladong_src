/**
 * @param {string} s
 * @return {number}
 */
// 3 滑动窗口
var lengthOfLongestSubstring = function (s) {
    let left = 0,
        right = 0;
    const str = s.split('');

    let window = new Map();
    let res = 0;

    while (right < str.length) {
        let c = str[right++];
        window.set(c, (window.get(c) || 0) + 1);

        while (window.get(c) > 1) {
            let d = str[left++];
            window.set(d, window.get(d) - 1);
        }
        res = Math.max(res, right - left);
    }
    return res;
};

const s = 'pwwkew';
const res = lengthOfLongestSubstring(s);
console.log(res);
