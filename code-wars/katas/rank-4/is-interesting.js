/**
 * @see https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
 * @param {number} number
 * @param {number[]} awesomePhrases
 */
export function isInteresting(number, awesomePhrases) {
  const isDigitFollowedByZeros = (number) =>
    number.toString()[0] !== "0" &&
    number
      .toString()
      .substring(1)
      .split("")
      .filter((n) => n !== "0").length === 0;

  const isEveryDigitSameNumber = (number) =>
    number
      .toString()
      .split("")
      .filter((n) => n === number.toString()[0]).length ===
    number.toString().length;

  const isSequential = (number, direction) => {
    let checking = +number.toString()[0];
    let isSequential = true;

    for (let i = 1; i < number.toString().length; i++) {
      if (
        +number.toString()[i] ===
        (direction === "ASC"
          ? checking !== 9
            ? checking + 1
            : 0
          : checking - 1)
      ) {
        checking = +number.toString()[i];
      } else {
        isSequential = false;
        break;
      }
    }

    return isSequential;
  };

  const isPalidrome = (number) =>
    number === +number.toString().split("").reverse().join("");

  const isMatchesAwesomePhrases = (number) =>
    awesomePhrases.indexOf(number) !== -1;

  if (number + 1 == 100 || number + 2 == 100) return 1;
  if (number < 100) return 0;

  let isInteresting = false;

  // check if number is interesting
  // Any digit followed by all zeros
  if (isDigitFollowedByZeros(number)) return 2;
  if (isDigitFollowedByZeros(number + 1) || isDigitFollowedByZeros(number + 2))
    isInteresting = true;

  // Every digit is the same number
  if (isEveryDigitSameNumber(number)) return 2;
  if (isEveryDigitSameNumber(number + 1) || isEveryDigitSameNumber(number + 2))
    isInteresting = true;

  // The digits are sequential, incementing
  if (isSequential(number, "ASC")) return 2;
  if (isSequential(number + 1, "ASC") || isSequential(number + 2, "ASC"))
    isInteresting = true;

  // The digits are sequential, decrementing
  if (isSequential(number, "DESC")) return 2;
  if (isSequential(number + 1, "DESC") || isSequential(number + 2, "DESC"))
    isInteresting = true;

  // The digits are a palindrome
  if (isPalidrome(number)) return 2;
  if (isPalidrome(number + 1) || isPalidrome(number + 2)) isInteresting = true;

  // The digits match one of the values in the awesomePhrases array
  if (isMatchesAwesomePhrases(number)) return 2;
  if (
    isMatchesAwesomePhrases(number + 1) ||
    isMatchesAwesomePhrases(number + 2)
  )
    isInteresting = true;

  if (isInteresting) return 1;

  return 0;
}
