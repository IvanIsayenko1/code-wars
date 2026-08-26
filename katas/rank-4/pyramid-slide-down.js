/**
 * @see https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript
 * @param {number[][]} pyramid
 * @returns {number}
 */
export function longestSlideDown(pyramid) {
  if (pyramid.length === 1) return pyramid[0][0];

  for (let i = pyramid.length - 2; i >= 0; i--) {
    for (let x = 0; x < pyramid[i].length; x++) {
      const sum =
        pyramid[i][x] + Math.max(pyramid[i + 1][x], pyramid[i + 1][x + 1]);

      if (i === 0) return sum;

      pyramid[i][x] = sum;
    }
  }
}
