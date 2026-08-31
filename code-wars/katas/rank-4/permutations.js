/**
 * @see https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
 * @param {*} string
 * @returns
 */
export function permutations(string) {
  if (string.length <= 1) return [string];

  let allPerms = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) !== i) continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1);
    for (let perm of permutations(remainingChars)) {
      allPerms.push(char + perm);
    }
  }

  return allPerms;
}
