export function integerSquareRoot(Number) {
  const chunks = Number.match(/.{1,2}(?=(.{2})*$)/g) || [];

  let squareResult = "";
  let rest = "0";

  chunks.forEach((chunk) => {
    const checkNumber = rest + chunk;

    const doubleSquare = multiplyByDigit(squareResult || "0", 2);

    let selectedDigit = 0;
    let selectedProduct = "0";

    for (let triedDigit = 1; triedDigit <= 9; triedDigit++) {
      const trialNumber = doubleSquare + triedDigit;

      const trialProduct = multiplyByDigit(trialNumber, triedDigit);

      if (compareNumberStrings(trialProduct, checkNumber) > 0) {
        break;
      }

      selectedDigit = triedDigit;
      selectedProduct = trialProduct;
    }

    squareResult += selectedDigit;

    rest = subtractNumberStrings(checkNumber, selectedProduct);
  });

  return removeLeadingZeros(squareResult);
}

function multiplyByDigit(numberString, digit) {
  let result = "";
  let carry = 0;

  for (let i = numberString.length - 1; i >= 0; i--) {
    const multiplication = Number(numberString[i]) * digit + carry;

    result = (multiplication % 10) + result;
    carry = Math.floor(multiplication / 10);
  }

  if (carry > 0) {
    result = carry + result;
  }

  return removeLeadingZeros(result);
}

function compareNumberStrings(first, second) {
  first = removeLeadingZeros(first);
  second = removeLeadingZeros(second);

  if (first.length > second.length) return 1;
  if (first.length < second.length) return -1;

  if (first > second) return 1;
  if (first < second) return -1;

  return 0;
}

function subtractNumberStrings(first, second) {
  second = second.padStart(first.length, "0");

  let result = "";
  let borrow = 0;

  for (let i = first.length - 1; i >= 0; i--) {
    let difference = Number(first[i]) - Number(second[i]) - borrow;

    if (difference < 0) {
      difference += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    result = difference + result;
  }

  return removeLeadingZeros(result);
}

function removeLeadingZeros(numberString) {
  return numberString.replace(/^0+/, "") || "0";
}

/**
 * Using BigInt
 */
// export function integerSquareRoot(Number){
//   if (Number.length > 2) {
//     // split the number in chunks of 2
//     const chunks = Number.match(/.{1,2}(?=(.{2})*$)/g);
//     let squareResult = "";
//     let rest = 0;

//     chunks.forEach((chunk, index) => {
//       if (index === 0) {
//         const square = Math.floor(Math.sqrt(+chunk));
//         const multiplied = square * square;
//         rest = chunk - multiplied;
//         squareResult += square;
//       } else {
//         let square = 0;
//         let tried = 0;
//         console.log(squareResult);
//         const doubleSquare = BigInt(squareResult) * BigInt(2);
//         const checkNumber = BigInt(`${rest}${chunk}`);
//         console.log("checkNumber", checkNumber);

//         while (!(checkNumber < square)) {
//           tried++;
//           square = BigInt(`${doubleSquare}${tried}`) * BigInt(tried);
//           console.log(doubleSquare, square);
//         }

//         if (square > checkNumber) tried--;

//         squareResult += tried;
//         const multiplied = BigInt(`${doubleSquare}${tried}`) * BigInt(tried);
//         rest = checkNumber - multiplied;
//       }
//     });

//     return squareResult;
//   } else {
//     return Math.floor(Math.sqrt(+Number)).toString();
//   }
// }
