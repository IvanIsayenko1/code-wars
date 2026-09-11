/**
 * @see https://www.codewars.com/kata/581bc0629ad9ff9873000316/train/typescript
 * Calculates the result of a mathematical expression represented as a string.
 * @param sum The mathematical expression to be evaluated.
 * @returns The result of the expression as a string or number.
 */
export const calculate = (sum: string): string | number => {
  if (!/^[0-9+\-*$.]+$/.test(sum)) return "400: Bad request";
  sum = sum.replaceAll("$", "/");

  let splittedSum = sum.match(
    /(?:^|(?<=[+\-$]))-\d+(?:\.\d+)?|\d+(?:\.\d+)?|[+\-/*]/g,
  )!;

  doCheckForOperations(splittedSum, "*", "/");
  doCheckForOperations(splittedSum, "+", "-");

  return +splittedSum.join("");
};

const doCheckForOperations = (
  splittedSum: string[],
  operation1: string,
  operation2: string,
) => {
  while (splittedSum.includes(operation1) || splittedSum.includes(operation2)) {
    const indexOperation1 = splittedSum.indexOf(operation1);
    const indexOperation2 = splittedSum.indexOf(operation2);

    const operationIndex = Math.min(
      indexOperation1 == -1 ? Infinity : indexOperation1,
      indexOperation2 == -1 ? Infinity : indexOperation2,
    );
    const operation = splittedSum[operationIndex];
    const [left, right] = [
      splittedSum[operationIndex - 1],
      splittedSum[operationIndex + 1],
    ];

    splittedSum[operationIndex - 1] = doOperation(left, right, operation);
    splittedSum.splice(operationIndex, 2);
  }
};

const doOperation = (left: string, right: string, operator: string): string => {
  const hasDecimals = left.includes(".") || right.includes(".");

  if (!hasDecimals) {
    const l = BigInt(left);
    const r = BigInt(right);

    switch (operator) {
      case "*":
        return (l * r).toString();
      case "/":
        return (Number(l) / Number(r)).toString();
      case "+":
        return (l + r).toString();
      case "-":
        return (l - r).toString();
      default:
        return "0";
    }
  }

  const l = Number(left);
  const r = Number(right);

  switch (operator) {
    case "*":
      return (l * r).toString();
    case "/":
      return (l / r).toString();
    case "+":
      return (l + r).toString();
    case "-":
      return (l - r).toString();
    default:
      return "0";
  }
};
