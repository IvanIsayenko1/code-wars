/**
 * @see https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
 * @param {string} string
 * @returns {boolean}
 */
export function alphanumeric(string) {
  return /^[a-z0-9]+$/g.test(string.toLowerCase());
}
