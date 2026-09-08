/**
 * @see https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
 * @param {string} strng
 * @returns {string}
 */
export function orderWeight(strng) {
  // "103 123 4444 99 2000" => "2000 103 123 4444 99"
  // "2000 10003 1234000 44444444 9999 11 11 22 123" => "11 11 2000 10003 22 123 1234000 44444444 9999"
  return strng
    .split(" ")
    .sort((a, b) => {
      const sumA = a.split("").reduce((acc, n) => acc + +n, 0);
      const sumB = b.split("").reduce((acc, n) => acc + +n, 0);

      if (sumA == sumB) return a.localeCompare(b);

      return sumA - sumB;
    })
    .join(" ");
}
