/**
 * @see https://www.codewars.com/kata/55cf3b567fc0e02b0b00000b/train/javascript
 * @param {number} n
 * @returns {string}
 */
export const part = (n: number): string => {
  const partitions = new Set<number>();

  const generate = (n: number, max: number = n, current: number[] = []) => {
    if (n == 0) {
      partitions.add(current.reduce((acc, n) => acc * n, 1));
      return;
    }

    for (let i = Math.min(n, max); i >= 1; i--) {
      generate(n - i, i, [...current, i]);
    }
  };

  generate(n);

  const res = [...partitions].sort((a, b) => a - b);

  const range = res[res.length - 1] - res[0];
  const average =
    Math.round((res.reduce((acc, sum) => acc + sum, 0) / res.length) * 100) /
    100;
  const median =
    res.length % 2 == 0
      ? (res[Math.floor(res.length / 2) - 1] +
          res[Math.floor(res.length / 2)]) /
        2
      : res[Math.floor(res.length / 2)];

  return `Range: ${range} Average: ${average.toFixed(2)} Median: ${median.toFixed(2)}`;
};
