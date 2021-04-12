/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let isNull = false;
  matrix.forEach((line) => {
    isNull = line.indexOf(0) >= 0 || isNull;
  });
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isNull) {
        if (matrix[i][j] === 0 && i > 0) {
          for (let h = i; h >= 0; h--) {
            sum += matrix[h][j];
          }
        }
      } else {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
