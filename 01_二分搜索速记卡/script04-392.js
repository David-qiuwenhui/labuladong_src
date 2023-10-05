/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 392 双指针搜索
var isSubsequence = function (s, t) {
    let i = 0,
        j = 0;
    while (i < s.length && j < t.length) {
        if (s[i].charCodeAt() === t[j].charCodeAt()) {
            i++;
        }
        j++;
    }
    return i === s.length ? true : false;
};

const s = 'abc';
const t = 'ahbgdc';
const res = isSubsequence(s, t);
console.log(res);
