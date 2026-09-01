/**
 * @see https://www.codewars.com/kata/5dad6e5264e25a001918a1fc/train/javascript
 * @param {string} r
 */
export function decode(r) {
  const [code, text] = r.match(/[0-9]+|[a-zA-Z]+/g);
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i),
  );
  const reverseCode = code % 26;
  let modularInverse = 1;

  while (true) {
    if ((reverseCode * modularInverse) % 26 == 1) break;
    if (modularInverse > 26) return "Impossible to decode";

    modularInverse++;
  }

  const getLetterPosition = (decodeLetter) =>
    (modularInverse * alphabet.indexOf(decodeLetter)) % 26;

  return text
    .split("")
    .map((l) => alphabet[getLetterPosition(l)])
    .join("");
}
