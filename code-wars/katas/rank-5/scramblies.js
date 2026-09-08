/**
 * @see https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
export function scramble(str1, str2) {
  const str1Counts = str1.split("").reduce((acc, lett) => {
    acc[lett] = (acc[lett] || 0) + 1;
    return acc;
  }, {});

  const str2Counts = str2.split("").reduce((acc, lett) => {
    acc[lett] = (acc[lett] || 0) + 1;
    return acc;
  }, {});

  for (const [key, value] of Object.entries(str2Counts)) {
    if (!str1Counts[key] || str1Counts[key] < value) return false;
  }

  return true;

  // const splittedStr1 = str1.split("");
  // const splittedStr2 = str2.split("");

  // for (let i = 0; i < splittedStr2.length; i++) {
  //   const letter = splittedStr2[i];
  //   const contains = splittedStr1.lastIndexOf(letter);

  //   if (contains == -1) return false;

  //   splittedStr1.splice(contains, 1);
  // }

  // return true;
}
