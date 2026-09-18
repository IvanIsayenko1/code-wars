/**
 * @see https://www.codewars.com/kata/55aa075506463dac6600010d/train/typescript
 * @param m
 * @param n
 * @returns
 */
export const listSquared = (m: number, n: number): number[][] => {
  const result: number[][] = [];

  for (let i = m; i <= n; i++) {
    let sum = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        sum += j ** 2;

        if (j !== i / j) {
          sum += (i / j) ** 2;
        }
      }
    }

    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum]);
    }
  }

  return result;
};
