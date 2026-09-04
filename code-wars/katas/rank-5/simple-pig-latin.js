/**
 * @see https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 * @param {string} str
 * @returns {string}
 */
export function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      /[a-zA-Z]/g.test(word) ? `${word.substring(1)}${word[0]}ay` : word,
    )
    .join(" ");
}
