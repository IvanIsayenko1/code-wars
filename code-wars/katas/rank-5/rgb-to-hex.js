/**
 * @see https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
export function rgb(r, g, b) {
  const helper = ["A", "B", "C", "D", "E", "F"];

  const getCode = (value) => {
    if (value >= 255) return "FF";
    if (value <= 0) return "00";
    const [quotient, reminder] = [Math.floor(value / 16), value % 16];
    const getValue = (value) => (value > 9 ? helper[value % 10] : value);
    return `${getValue(quotient)}${getValue(reminder)}`;
  };

  return `${getCode(r)}${getCode(g)}${getCode(b)}`;
}
