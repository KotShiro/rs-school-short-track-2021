/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const posNum = [];
  let newArr = arr;
  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] === -1) {
      posNum.push(i);
    }
  }
  newArr = newArr.filter((f) => f !== -1).sort((a, b) => a - b);
  posNum.forEach((e) => {
    newArr.splice(e, 0, -1);
  });
  return newArr;
}

module.exports = sortByHeight;
