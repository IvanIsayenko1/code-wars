/**
 * @see https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 * @param {number} seconds
 * @returns {string}
 */
export function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  const addZeros = (value) => (value < 10 ? "0" + value : value);

  return `${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)}`;
}
