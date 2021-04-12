/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const myMap = new Map();
  const myArr = domains.map((e) => e.split('.').reverse());
  for (let l = 0; l < myArr.length; l++) {
    const line = myArr[l];
    for (let i = 0; i < line.length; i++) {
      if (i === 0) {
        const keyZ = `.${line[i]}`;
        if (myMap.get(keyZ) !== undefined) {
          const index = myMap.get(keyZ);
          myMap.set(keyZ, index + 1);
        } else {
          myMap.set(keyZ, 1);
        }
      } else {
        const key = `.${line.slice(0, i + 1).join('.')}`;
        if (myMap.get(key) !== undefined) {
          const index = myMap.get(key);
          myMap.set(key, index + 1);
        } else {
          myMap.set(key, 1);
        }
      }
    }
  }
  return Object.fromEntries(myMap);
}

module.exports = getDNSStats;
