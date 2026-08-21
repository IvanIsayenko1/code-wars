const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumbers = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

/**
 * @see https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
 */
export class RomanNumerals {
  static toRoman(num) {
    let result = "";

    while (num) {
      let pointer = numbers.indexOf(numbers.find((number) => num >= number));
      num = num - numbers[pointer];
      result += romanNumbers[pointer];
    }

    return result;
  }

  static fromRoman(str) {
    let result = 0;

    while (str.length) {
      let pointer = romanNumbers.indexOf(
        romanNumbers.find(
          (number) => `${str[0]}${str[1]}` === number || str[0] === number,
        ),
      );
      result += numbers[pointer];
      str = str.substring(romanNumbers[pointer].length > 1 ? 2 : 1);
    }

    return result;
  }
}
