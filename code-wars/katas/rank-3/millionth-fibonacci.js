// export function fib(n) {
//   let fibbCheck = [0n, 1n];

//   if (n > 0) {
//     for (let i = 1; i < n; i++) {
//       fibbCheck = [fibbCheck[1], fibbCheck[1] + fibbCheck[0]];
//     }
//   } else {
//     for (let i = n; i < 0; i++) {
//       fibbCheck = [fibbCheck[1] - fibbCheck[0], fibbCheck[0]];
//     }
//   }

//   return fibbCheck[n > 0 ? 1 : 0];
// }

/**
 * @see https://www.codewars.com/kata/53d40c1e2f13e331fc000c26/javascript
 * @param {number} n
 * @returns {number}
 */
export function fib(n) {
  function fastDoubling(n) {
    if (n === 0) {
      return [0n, 1n];
    }

    const [a, b] = fastDoubling(Math.floor(n / 2));

    const c = a * (2n * b - a);
    const d = a * a + b * b;

    if (n % 2 === 0) {
      return [c, d];
    }

    return [d, c + d];
  }

  if (n >= 0) {
    return fastDoubling(n)[0];
  }

  const result = fastDoubling(-n)[0];

  return -n % 2 === 0 ? -result : result;
}
