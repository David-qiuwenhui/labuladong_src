/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 76 滑动窗口模板
var minWindow = function (s, t) {
    let str = s.split('');
    let target = t.split('');
    let left = 0,
        right = 0;

    let need = new Map();
    let window = new Map();
    let valid = 0;
    let start = 0;
    let len = Number.MAX_SAFE_INTEGER;
    for (t1 of target) {
        need.set(t1, (need.get(t1) || 0) + 1);
    }

    while (right < s.length) {
        let c = str[right++];
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        while (valid === need.size) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            let d = str[left++];
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }

    return len === Number.MAX_SAFE_INTEGER ? '' : s.slice(start, start + len);
};

const s = 'a';
const t = 'aa';
const res = minWindow(s, t);
console.log(res);
