/**
 * @see https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript
 * @param {number} n
 * @returns {number}
 */
export function nextSmaller(n) {
  const digits = String(n).split("");

  let pivot = digits.length - 2;
  while (pivot >= 0 && digits[pivot] <= digits[pivot + 1]) {
    pivot--;
  }

  // that means that the digits are in ascending order
  if (pivot < 0) return -1;

  // find the biggest number from the right
  let biggest = digits.length - 1;
  while (digits[biggest] >= digits[pivot]) {
    biggest--;
  }

  [digits[pivot], digits[biggest]] = [digits[biggest], digits[pivot]];

  // sort to get the smallest order
  const rightSide = digits
    .slice(pivot + 1)
    .sort((a, b) => b - a)
    .join("");

  const resultNumber = digits.slice(0, pivot + 1).join("") + rightSide;
  if (Number(resultNumber).toString().length < n.toString().length) return -1;
  return Number(resultNumber);
}
