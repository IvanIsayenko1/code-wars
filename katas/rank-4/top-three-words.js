/**
 * @see https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
 * @param {string} text
 * @returns {string[]}
 */
export function topThreeWords(text) {
  const count = new Map();

  (text.toLowerCase().match(/[a-z']+/g) || [])
    .filter((word) => /[a-z]/.test(word))
    .forEach((word) => {
      count.set(word, count.has(word) ? count.get(word) + 1 : 1);
    });

  return [...count]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((wordCount) => wordCount[0]);
}
