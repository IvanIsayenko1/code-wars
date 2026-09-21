/**
 * @see https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript
 * @param str
 * @returns string
 */
export function rot13(str: string): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphLength = alphabet.length;

  return str
    .split("")
    .map((char) => {
      if (!/[a-z]/i.test(char)) return char;

      const indexChar = alphabet.indexOf(char.toUpperCase());
      const rot13Index =
        alphLength - indexChar > 13
          ? 13 + indexChar
          : 13 - (alphLength - indexChar);

      if (char === char.toUpperCase()) return alphabet[rot13Index];
      return alphabet[rot13Index].toLowerCase();
    })
    .join("");
}
