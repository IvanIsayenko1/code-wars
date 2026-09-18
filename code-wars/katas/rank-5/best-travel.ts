/**
 * @see https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/typescript
 * @param t
 * @param k
 * @param ls
 * @returns result
 */
export function chooseBestSum(
  t: number,
  k: number,
  ls: number[],
): number | null {
  if (ls.length < k) return null;

  let baseStart = Array.from({ length: k }, (_, index) => index);
  const possibilities: number[][] = [baseStart];
  const max = ls.length;
  let distance = 0;

  while (true) {
    const newPossibility = [...possibilities[possibilities.length - 1]];
    const lastNumber = +newPossibility[newPossibility.length - 1];
    const newDistance = newPossibility.reduce((acc, np) => acc + ls[+np], 0);

    if (newDistance > distance && newDistance <= t) {
      distance = newDistance;
    }

    if (lastNumber + 1 != max) {
      newPossibility[newPossibility.length - 1] = lastNumber + 1;
      possibilities.push(newPossibility);
    } else {
      const next = [...newPossibility];

      let i = next.length - 1;

      // Find the rightmost index that can be increased
      while (i >= 0 && next[i] === max - (next.length - i)) {
        i--;
      }

      if (i < 0) {
        break;
      }

      next[i]++;

      // Reset everything after it
      for (let j = i + 1; j < next.length; j++) {
        next[j] = next[j - 1] + 1;
      }

      possibilities.push(next);
    }

    if (
      ls.length - +possibilities[possibilities.length - 1][0] === k ||
      distance === t
    ) {
      break;
    }
  }
  return distance !== 0 ? distance : null;
}
