/**
 * @see https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript
 * @param {number[]} lst
 * @returns
 */
export function sumOfDivided(lst) {
  const allPrimeFactors = new Set();
  const result = [];

  lst.forEach((number) => {
    getPrimeFactors(number).forEach((prime) => allPrimeFactors.add(prime));
  });

  [...allPrimeFactors]
    .sort((a, b) => a - b)
    .forEach((prime) => {
      result.push([
        prime,
        lst
          .filter((number) => number % prime === 0)
          .reduce((acc, number) => acc + number, 0),
      ]);
    });

  return result;
}

function getPrimeFactors(number) {
  let rest = Math.abs(number);
  let checkingNumber = 2;
  const primeFactors = [];

  while (rest !== 1) {
    if (isPrime(checkingNumber) && rest % checkingNumber === 0) {
      rest = rest / checkingNumber;

      primeFactors.push(checkingNumber);
      checkingNumber = 2;

      if (isPrime(rest)) {
        primeFactors.push(rest);
        rest = 1;
      }
    } else {
      checkingNumber++;
    }
  }

  return primeFactors;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const boundary = Math.sqrt(num);
  for (let i = 3; i <= boundary; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
