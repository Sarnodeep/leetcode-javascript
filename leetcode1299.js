/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let length = arr.length;
    let right = arr[length - 1];
    arr[length - 1] = -1;
    let last;
    for (let i = length - 2; i > -1; i--) {
        last = arr[i];
        arr[i] = right;
        right = last < arr[i] ? arr[i] : last;
    }
    return arr;
};