/**
 * @see https://www.codewars.com/kata/57e5aa1d7fbcc988800001ae/train/typescript
 * @param flatArray
 * @param depth
 * @returns unflattened array
 */
export function unflatten(flatArray: any[], depth: number): any[] {
  const flatten = (array: any[], isReversed: boolean): any[] => {
    const result: any[] = [];

    let checkIndex = isReversed ? array.length - 1 : 0;
    let endIndex = isReversed ? 0 : array.length - 1;

    while (!isReversed ? checkIndex <= endIndex : checkIndex >= endIndex) {
      const checking = array[checkIndex];

      // the checking value is an array, so flatten it and add it to the result
      if (Array.isArray(checking)) {
        isReversed
          ? result.unshift(flatten(checking, isReversed))
          : result.push(flatten(checking, isReversed));
        checkIndex = checkIndex + (isReversed ? -1 : 1);
        continue;
      }

      const remainder = Math.abs(
        checking %
          (array.length -
            (!isReversed ? checkIndex : array.length - 1 - checkIndex)),
      );
      // the remainder is less than 3, so add the checking value to the result
      if (remainder < 3) {
        !isReversed ? result.push(checking) : result.unshift(checking);
        checkIndex = checkIndex + (isReversed ? -1 : 1);
        continue;
      }

      // the remainder is greater than or equal to 3, so slice the array and add it to the result
      const min = isReversed ? checkIndex + 1 - remainder : checkIndex;
      const max = isReversed ? checkIndex + 1 : checkIndex + remainder;
      const newBlock = array.slice(min, max);

      if (!isReversed) {
        result.push(newBlock);
        checkIndex = max;
      } else {
        result.unshift(newBlock);
        checkIndex = min - 1;
      }
      continue;
    }

    return result;
  };

  for (let i = 0; i < depth; i++) {
    const isReversed = i % 2 === 1;
    flatArray = flatten(flatArray, isReversed);
  }

  return flatArray;
}
