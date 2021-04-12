/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const myMap = new Map();
  for (let i = 0; i < names.length; i++) {
    if (myMap.get(names[i]) !== undefined) {
      const index = myMap.get(names[i]);
      myMap.set(names[i], index + 1);
      myMap.set(`${names[i]}(${index + 1})`, 0);
    } else {
      myMap.set(names[i], 0);
    }
  }

  return [...myMap.keys()];
}

module.exports = renameFiles;
