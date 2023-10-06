/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 438 滑动窗口
var findAnagrams = function (s, p) {
    let left = 0,
        right = 0;
    let window = new Map();
    let need = new Map();
    let valid = 0;

    const str = s.split('');
    const target = p.split('');
    for (let t of target) {
        need.set(t, (need.get(t) || 0) + 1);
    }
    let res = [];

    while (right < str.length) {
        let c = str[right++];
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) valid++;
        }

        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left);
            }
            let d = str[left++];
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) valid--;
                window.set(d, (window.get(d) || 0) - 1);
            }
        }
    }

    return res;
};

const s = 'cbaebabacd';
const p = 'abc';
const res = findAnagrams(s, p);
console.log(res);
