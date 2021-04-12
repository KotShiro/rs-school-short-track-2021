/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const out = [];
  for (let i = 0; i < matrix.length; i++) {
    const line = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let sum = 0;
      const checker = (c1, c2) => {
        try {
          if (matrix[c1][c2] === true) sum += 1;
        } catch (e) {
          sum += 0;
        }
      };
      checker(i - 1, j - 1);
      checker(i - 1, j + 1);
      checker(i - 1, j);
      checker(i + 1, j - 1);
      checker(i + 1, j + 1);
      checker(i + 1, j);
      checker(i, j - 1);
      checker(i, j + 1);
      line.push(sum);
    }
    out.push(line);
  }
  return out;
}

module.exports = minesweeper;
