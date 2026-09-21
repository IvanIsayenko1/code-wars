/**
 * @see https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/typescript
 * @param x
 */
export default function add(x: number): any {
  function sum(next: number) {
    return add(x + next);
  }

  sum.valueOf = function () {
    return x;
  };

  return sum;
}
