/**
 * @see https://www.codewars.com/kata/55cf3b567fc0e02b0b00000b/train/javascript
 * @param {number} n
 * @returns {string}
 */
export function part(n) {
  // const startArray = new Array(n).fill(1);
  // const part = [startArray];
  // let sum = 2;
  // while (sum != n + 1) {
  //   part.push([sum, ...startArray.slice(sum)]);
  //   for (let x = 2; x <= sum; x++) {
  //     let lastPart = [sum, ...startArray.slice(sum)];
  //     if (lastPart.length == 1) break;
  //     for (let i = 0; i < lastPart.length; i++) {
  //       const sum1 = lastPart
  //         .slice(i, i + x)
  //         .reduce((acc, num) => acc + num, 0);
  //       if (sum1 != 1 && sum1 <= sum) {
  //         part.push([...lastPart.slice(0, i), sum1, ...lastPart.slice(i + x)]);
  //         lastPart = [...part[part.length - 1]];
  //       }
  //     }
  //     if (lastPart.length <= 2) break;
  //   }
  //   sum++;
  // }
  // const res = [
  //   ...new Set(
  //     part.map((p) => p.reduce((acc, n) => acc * n, 1)).sort((a, b) => a - b),
  //   ),
  // ];
  // const range = res[res.length - 1] - res[0];
  // const average =
  //   Math.round((res.reduce((acc, sum) => acc + sum, 0) / res.length) * 100) /
  //   100;
  // const median =
  //   res.length % 2 == 0
  //     ? (res[Math.floor(res.length / 2) - 1] +
  //         res[Math.floor(res.length / 2)]) /
  //       2
  //     : res[Math.floor(res.length / 2)];
  // return `Range: ${range} Average: ${average.toFixed(2)} Median: ${median.toFixed(2)}`;

  function enumPartitions(n, max = n, current = [], result = []) {
    if (n === 0) {
      result.push([...current]);
      return result;
    }

    for (let i = Math.min(n, max); i >= 1; i--) {
      current.push(i);

      enumPartitions(n - i, i, current, result);

      current.pop();
    }

    return result;
  }

  const partitions = enumPartitions(n);

  const res = [
    ...new Set(
      partitions
        .map((p) => p.reduce((acc, n) => acc * n, 1))
        .sort((a, b) => a - b),
    ),
  ];
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
}
