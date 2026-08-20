/**
 * @see https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
export function add(a, b) {
  let result = [];
  let rest = 0;
  let index = Math.max(a.length - 1, b.length - 1);
  if (a.length < index + 1) a = a.padStart(index + 1, "0");
  if (b.length < index + 1) b = b.padStart(index + 1, "0");

  while (index !== -1) {
    const sum = String(+a[index] + +b[index] + rest).split("");

    rest = sum.length > 1 ? +sum[0] : 0;
    result.unshift(sum.length > 1 ? sum[1] : sum[0]);

    index--;

    if (index === -1 && rest) {
      result.unshift(rest);
    }
  }

  return result.join("");
}
