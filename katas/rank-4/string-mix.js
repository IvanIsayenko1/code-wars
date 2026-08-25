/**
 * @see https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
 * @param {string} s1
 * @param {string} s2
 */
export function mix(s1, s2) {
  const result = [];
  const countS1 = getCountOfLetters(s1);
  const countS2 = getCountOfLetters(s2);
  const chars = "abcdefghijklmnopqrstuvwxyz";

  console.log(countS1, countS2);

  chars.split("").forEach((char) => {
    if (countS1.has(char) && countS2.has(char)) {
      if (countS1.get(char) > countS2.get(char)) {
        result.push(`1:${char.repeat(countS1.get(char))}`);
      } else if (countS1.get(char) < countS2.get(char)) {
        result.push(`2:${char.repeat(countS2.get(char))}`);
      } else {
        result.push(`=:${char.repeat(countS1.get(char))}`);
      }
    } else if (countS1.has(char) && !countS2.has(char)) {
      result.push(`1:${char.repeat(countS1.get(char))}`);
    } else if (!countS1.has(char) && countS2.has(char)) {
      result.push(`2:${char.repeat(countS2.get(char))}`);
    }
  });

  return result
    .sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length;
      }

      return a < b ? -1 : a > b ? 1 : 0;
    })
    .join("/");
}

function getCountOfLetters(text) {
  const count = new Map();

  text.match(/[a-z]/g).forEach((letter) => {
    count.set(letter, count.has(letter) ? count.get(letter) + 1 : 1);
  });

  return new Map(
    [...count].filter((c) => c[1] > 1).sort((a, b) => a[0].localeCompare(b[0])),
  );
}
