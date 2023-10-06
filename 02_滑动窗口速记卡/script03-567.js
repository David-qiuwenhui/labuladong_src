/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 567 滑动窗口
var checkInclusion = function (s1, s2) {
    let left = 0,
        right = 0;
    let window = new Map();
    let need = new Map();
    let valid = 0;

    const str1 = s1.split('');
    const str2 = s2.split('');
    for (s of str1) {
        need.set(s, (need.get(s) || 0) + 1);
    }

    while (right < str2.length) {
        let c = str2[right++];
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        while (right - left >= str1.length) {
            if (valid === need.size) {
                return true;
            }

            let d = str2[left++];
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) valid--;
                window.set(d, (window.get(d) || 0) - 1);
            }
        }
    }
    return false;
};

const s1 = 'ab';
const s2 = 'eidbaooo';
const res = checkInclusion(s1, s2);
console.log(res);
