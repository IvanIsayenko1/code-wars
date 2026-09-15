/**
 * @see https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/typescript
 * @param expression
 * @returns the result of evaluating `expression`
 */
export function calc(expression: string): number {
  expression = expression.replaceAll(" ", "");

  expression = resolveParentheses(replaceOperators(expression));
  expression = resolveOperations(expression, "*", "/");
  expression = resolveOperations(expression, "+", "-");

  return Number(expression);
}

const replaceOperators = (expression: string): string => {
  return expression.replace(/--|\+\+|\+-|-\+/g, (match) => {
    return match === "--" || match === "++" ? "+" : "-";
  });
};

const resolveParentheses = (expression: string): string => {
  let openIndex = -1;
  let closeIndex = -1;
  let countOpen = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === "(") {
      if (countOpen === 0) {
        openIndex = i;
      }

      countOpen++;
    } else if (char === ")") {
      if (countOpen === 1) {
        closeIndex = i;
        break;
      }
      countOpen--;
    }
  }

  if (openIndex === -1 || closeIndex === -1) return expression;

  let innerExpression = expression.slice(openIndex + 1, closeIndex);

  if (innerExpression.includes("(")) {
    innerExpression = resolveParentheses(innerExpression);
  }

  innerExpression = resolveOperations(innerExpression, "*", "/");
  innerExpression = resolveOperations(innerExpression, "+", "-");

  return resolveParentheses(
    replaceOperators(
      expression.slice(0, openIndex) +
        innerExpression +
        expression.slice(closeIndex + 1),
    ),
  );
};

const resolveOperations = (
  expression: string,
  operation1: string,
  operation2: string,
): string => {
  const splitted = expression.match(
    /(?:^|(?<=[+\-*/]))[-+]\d+(?:\.\d+)?|\d+(?:\.\d+)?|[+\-\/*]/g,
  )!;
  let indexOperation1 = splitted.indexOf(operation1);
  let indexOperation2 = splitted.indexOf(operation2);

  while (indexOperation1 !== -1 || indexOperation2 !== -1) {
    const operationIndex = Math.min(
      indexOperation1 === -1 ? Infinity : indexOperation1,
      indexOperation2 === -1 ? Infinity : indexOperation2,
    );
    const operation = splitted[operationIndex];
    const [left, right] = [
      splitted[operationIndex - 1],
      splitted[operationIndex + 1],
    ];

    splitted[operationIndex - 1] = doOperation(left, right, operation);
    splitted.splice(operationIndex, 2);

    indexOperation1 = splitted.indexOf(operation1);
    indexOperation2 = splitted.indexOf(operation2);
  }

  return splitted.join("");
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
