/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// 875 二分搜索左边界
var minEatingSpeed = function (piles, h) {
    let left = 0,
        right = Math.pow(10, 9);
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let useTime = getUseTime(piles, mid);
        if (useTime === h) {
            right = mid - 1;
        } else if (useTime < h) {
            right = mid - 1;
        } else if (useTime > h) {
            left = mid + 1;
        }
    }

    return left;
};

function getUseTime(arr, speed) {
    let time = 0;
    for (let a of arr) {
        time += Math.ceil(a / speed);
    }
    return time;
}

const piles = [3, 6, 7, 11];
const h = 8;
const res = minEatingSpeed(piles, h);
console.log(res);
