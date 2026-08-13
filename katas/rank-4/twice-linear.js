export function dblLinear(n) {
  let result = [1];

  let iIndex = 0;
  let jIndex = 0;

  const generateI = (n) => 2 * n + 1;
  const generateJ = (n) => 3 * n + 1;

  while (result.length <= n) {
    const i = generateI(result[iIndex]);
    const j = generateJ(result[jIndex]);

    const next = Math.min(i, j);

    result.push(next);

    if (next === i) iIndex++;
    if (next === j) jIndex++;
  }

  return result[n];
}
