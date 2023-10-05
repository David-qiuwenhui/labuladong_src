/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// 704 二分搜索左边界
var shipWithinDays = function (weights, days) {
    let left = getMinWeight(weights);
    let right = getMaxWeight(weights);
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let needDays = getNeedDays(weights, mid);
        if (needDays === days) {
            right = mid - 1;
        } else if (needDays < days) {
            right = mid - 1;
        } else if (needDays > days) {
            left = mid + 1;
        }
    }

    return left;
};

function getNeedDays(weights, capacity) {
    let day = 0;
    for (let i = 0; i < weights.length; ) {
        let c = capacity;
        while (i < weights.length && c > 0) {
            if (c < weights[i]) {
                break;
            } else {
                c -= weights[i];
            }
            i++;
        }
        day++;
    }
    return day;
}

function getMinWeight(weights) {
    return Math.max(...weights);
}

function getMaxWeight(weights) {
    let sum = 0;
    for (let w of weights) {
        sum += w;
    }
    return sum;
}

const weights = [1, 2, 3, 1, 1];
const days = 4;
const res = shipWithinDays(weights, days);
console.log(res);
