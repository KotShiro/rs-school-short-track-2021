/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const strRep = str.substring(0, i) + str.substring(i + 1, str.length);
    arr.push(+strRep);
  }
  return arr.sort((a, b) => a - b)[arr.length - 1];
}

module.exports = deleteDigit;
