/**
 * @see https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
 * @param {number} n
 */
export function nextBigger(n) {
  const digits = String(n).split("");

  let pivot = digits.length - 2;
  while (pivot >= 0 && digits[pivot] >= digits[pivot + 1]) {
    pivot--;
  }

  // that means that the digits are in descending order
  if (pivot < 0) return -1;

  // find the smallest number from the right
  let smaller = digits.length - 1;
  while (digits[smaller] <= digits[pivot]) {
    smaller--;
  }

  [digits[pivot], digits[smaller]] = [digits[smaller], digits[pivot]];

  // sort to get the smallest order
  const rightSide = digits
    .slice(pivot + 1)
    .sort()
    .join("");

  return Number(digits.slice(0, pivot + 1).join("") + rightSide);
}
