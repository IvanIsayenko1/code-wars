/**
 * @see https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript
 * @param {number} n
 * @returns {number}
 */
export function perimeter(n) {
  const fib = [1];

  while (n + 1 > fib.length) {
    fib.push(fib[fib.length - 1] + (fib[fib.length - 2] || 0));
  }

  return 4 * fib.reduce((acc, n) => acc + n, 0);
}
