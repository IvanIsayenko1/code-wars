/**
 * @see https://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript
 * @param {number} n
 * @returns {number}
 */
export function hamming(n) {
  const numbers = [1];
  let index2 = 0,
    index3 = 0,
    index5 = 0;

  while (numbers.length != n) {
    const minNumber = Math.min(
      numbers[index2] * 2,
      numbers[index3] * 3,
      numbers[index5] * 5,
    );

    numbers.push(minNumber);

    if (minNumber % 5 == 0) {
      index5++;
    }
    if (minNumber % 3 == 0) {
      index3++;
    }
    if (minNumber % 2 == 0) {
      index2++;
    }
  }

  return numbers[n - 1];
}
