/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let out = '';
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum += 1;
    } else {
      out += `${sum > 1 ? sum : ''}${str[i]}`;
      sum = 1;
    }
  }
  return out;
}

module.exports = encodeLine;
