/**
 * @see https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/train/typescript
 * @param flatArray
 * @returns
 */
export function unflatten(flatArray: any[]): any[] {
  const result: any[] = [];

  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] < 3) result.push(flatArray[i]);
    if (flatArray[i] > 2) {
      result.push(flatArray.slice(i, i + flatArray[i]));
      i = flatArray[i] - 1 + i;
    }
  }

  return result;
}
