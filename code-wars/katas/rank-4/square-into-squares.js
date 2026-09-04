/**
 * @see https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript
 * @param {number} n
 * @returns {number[]}
 */
export function decompose(n) {
  const result = [];

  function find(remaining, max) {
    if (remaining === 0) {
      return true;
    }

    for (let i = max; i >= 1; i--) {
      const square = i * i;

      if (square > remaining) {
        continue;
      }

      result.push(i);

      if (find(remaining - square, i - 1)) {
        return true;
      }

      result.pop();
    }

    return false;
  }

  const found = find(n * n, n - 1);

  return found ? result.reverse() : null;
}
