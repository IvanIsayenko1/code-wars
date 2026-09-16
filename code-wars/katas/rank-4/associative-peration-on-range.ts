/**
 * @see https://www.codewars.com/kata/608cc9666513cc00192a67a9/train/typescript
 * @param arr
 * @param op
 * @param ranges
 * @returns result
 */
// export function computeRanges<T>(
//   arr: T[],
//   op: (a: T, b: T) => T,
//   ranges: [number, number][],
// ): T[] {
//   const results = [];
//   const blockSize = Math.ceil(Math.sqrt(arr.length));
//   const numberOfBlocks = Math.ceil(arr.length / blockSize);
//   const blockResults = new Map<number, T>();

//   for (let i = 0; i < numberOfBlocks; i++) {
//     let start = i * blockSize;
//     let end = Math.min(start + blockSize, arr.length);
//     let res: T = arr[start];
//     while (start + 1 < end) {
//       res = op(res, arr[start + 1]);
//       start++;
//     }
//     blockResults.set(i, res);
//   }

//   for (const [start, end] of ranges) {
//     let res: T | undefined;
//     let i = start;

//     while (i < end) {
//       // Complete block
//       if (i % blockSize === 0 && i + blockSize <= end) {
//         const blockIndex = i / blockSize;
//         const blockResult = blockResults.get(blockIndex)!;

//         res = res === undefined ? blockResult : op(res, blockResult);

//         i += blockSize;
//         continue;
//       }

//       // Single element
//       res = res === undefined ? arr[i] : op(res, arr[i]);

//       i++;
//     }

//     results.push(res!);
//   }

//   return results;
// }

export function computeRanges<T>(
  arr: T[],
  op: (a: T, b: T) => T,
  ranges: [number, number][],
): T[] {
  // Find next power of 2
  let size = 1;

  while (size < arr.length) {
    size *= 2;
  }

  // Build tree
  const tree: (T | undefined)[] = new Array(size * 2);

  // Leaves
  for (let i = 0; i < arr.length; i++) {
    tree[size + i] = arr[i];
  }

  // Internal nodes
  for (let i = size - 1; i > 0; i--) {
    const left = tree[i * 2];
    const right = tree[i * 2 + 1];

    if (left !== undefined && right !== undefined) {
      tree[i] = op(left, right);
    } else {
      tree[i] = left ?? right;
    }
  }

  const results: T[] = [];

  // Query each range
  for (const [start, end] of ranges) {
    let left = start + size;
    let right = end + size;

    let leftResult: T | undefined;
    let rightResult: T | undefined;

    while (left < right) {
      // Left node is a right child
      if (left % 2 === 1) {
        leftResult =
          leftResult === undefined ? tree[left] : op(leftResult, tree[left]!);

        left++;
      }

      // Right node is a left child
      if (right % 2 === 1) {
        right--;

        rightResult =
          rightResult === undefined
            ? tree[right]
            : op(tree[right]!, rightResult);
      }

      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    // Preserve the original order:
    // leftResult comes before rightResult
    let result: T;

    if (leftResult === undefined) {
      result = rightResult!;
    } else if (rightResult === undefined) {
      result = leftResult;
    } else {
      result = op(leftResult, rightResult);
    }

    results.push(result);
  }

  return results;
}
