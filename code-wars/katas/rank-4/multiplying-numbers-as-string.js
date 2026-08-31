// This is the first part.
// You can solve the second part here when you are done with this.
// Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid

// Usage of BigInt is disallowed and will be checked in the full test suite.

export function multiply(a, b) {
  let result = "";
  a = a.length > 1 ? a.replace(/^0+/, "") : a;
  b = b.length > 1 ? b.replace(/^0+/, "") : b;

  for (let x = b.length - 1; x >= 0; x--) {
    const n2 = b[x];
    let operationRest = null;
    const operation = [];

    for (let y = a.length - 1; y >= 0; y--) {
      const n1 = a[y];
      let multValue = (n1 * n2).toString();
      if (operationRest) {
        multValue = (+multValue + +operationRest).toString();
      }
      operation.unshift(y === 0 ? multValue : multValue[multValue.length - 1]);
      operationRest = null;
      if (multValue.length > 1) operationRest = multValue[0];
    }

    const positionOffset = b.length - 1 - x;
    const operationValue = operation.join("") + "0".repeat(positionOffset);
    if (!result) {
      result = operation.join("");
    } else {
      const additionLength = Math.max(result.length, operationValue.length);

      result = result.padStart(additionLength, "0");

      const alignedOperation = operationValue.padStart(additionLength, "0");

      let rest = null;
      for (let i = additionLength - 1; i >= -1; i--) {
        const operationNumber = alignedOperation[i] | 0;

        const newResultNumber =
          Number(result.toString()[i] | 0) + +operationNumber;

        const newResultNumberWithRest = (
          newResultNumber + (+rest || 0)
        ).toString();

        let usedValue =
          i === -1
            ? newResultNumberWithRest
            : newResultNumberWithRest[newResultNumberWithRest.length - 1];

        result =
          result.toString().substring(0, i + 1) +
          usedValue +
          result.toString().substring(i + 2);

        rest = null;
        if (newResultNumberWithRest.length > 1) {
          rest = newResultNumberWithRest[0];
        }
      }
    }
  }

  return result.toString().replace(/^0+/, "") || "0";
}
