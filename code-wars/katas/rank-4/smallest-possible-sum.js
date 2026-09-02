/**
 * @see https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript
 * @param {number[]} numbers
 * @returns {number}
 */
export function solution(numbers) {
  const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

  const commonDivisor = numbers.reduce((result, number) => gcd(result, number));

  return commonDivisor * numbers.length;
}
