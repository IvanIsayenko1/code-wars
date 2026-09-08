/**
 * @see https://www.codewars.com/kata/526989a41034285187000de4/train/javascript
 * @param {string} start
 * @param {string} end
 * @returns {number}
 */
export function ipsBetween(start, end) {
  const getSum = (ip) =>
    ip
      .split(".")
      .reverse()
      .reduce(
        (acc, num, index) =>
          index !== 0 ? +num * 256 ** index + acc : +num + acc,
        0,
      );
  return getSum(end) - getSum(start);
}
