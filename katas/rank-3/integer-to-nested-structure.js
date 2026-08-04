const primes = [2];
const primeToPosition = new Map([[2, 1]]);

export function encode(n) {
  let result = getPrimeFactors(n);
  getNestedStructure(result);
  const binary = getBinaryCode(result);

  return parseInt(binary, 2);
}

export function decode(n) {
  const binary = getBalancedBinaryCode(n);
  const result = convertBinaryToArrays(binary);
  getValueOfNestedStructure(result);

  return result.reduce((acc, r) => acc * r, 1);
}

function getBalancedBinaryCode(number) {
  let balance = 0;
  number = number.toString(2) + "1";

  for (const bit of number) {
    if (bit === "1") balance++;
    else balance--;
  }

  number += "0".repeat(balance);
  return number;
}

function convertBinaryToArrays(binary) {
  const brackets = binary
    .split("")
    .map((c) => (c === "1" ? "[" : "]"))
    .join("");

  const json = `[${brackets.replace(/\]\[/g, "],[")}]`;

  const result = JSON.parse(json);

  return result;
}

function getNestedStructure(primeFactors) {
  primeFactors.forEach((pf, i) => {
    const primePosition = getPrimePosition(pf);
    if (primePosition === 1) {
      primeFactors[i] = [];
    } else {
      primeFactors[i] = getPrimeFactors(primePosition);
      getNestedStructure(primeFactors[i]);
    }
  });
}

function getValueOfNestedStructure(structure) {
  // get the prime from the positions
  structure.forEach((s, i) => {
    if (Array.isArray(s[0])) {
      // nested
      getValueOfNestedStructure(s);
      if (Array.isArray(s) && s.length === 1) {
        structure[i] = getPrimeFromPosition(structure[i][0]);
      } else {
        structure[i] = [structure[i].reduce((acc, r) => acc * r, 1)];
        structure[i] = getPrimeFromPosition(structure[i][0]);
      }
    } else if (Array.isArray(s) && s.length === 0) {
      structure[i] = 2;
    }
  });
}

function getBinaryCode(array) {
  let str = JSON.stringify(array)
    .replace(/,/g, "")
    .replace(/\[/g, "[ ")
    .replace(/\]/g, " ]")
    .replace(/\s+/g, " ")
    .replace(/ /g, "")
    .trim();

  str = str
    .substring(1, str.length - 1)
    .replaceAll("[", "1")
    .replaceAll("]", "0");

  const splited = str.split("");
  const lastOne = splited.lastIndexOf("1");
  const result = splited.slice("0", lastOne);

  return result.join("");
}

function getPrimeFactors(number) {
  let rest = number;
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

function getPrimePosition(primeNumber) {
  const cachedPosition = primeToPosition.get(primeNumber);

  if (cachedPosition !== undefined) {
    return cachedPosition;
  }

  generatePrimesUntilValue(primeNumber);

  const position = primeToPosition.get(primeNumber);

  return position;
}

function getPrimeFromPosition(primePosition) {
  generatePrimesUntilPosition(primePosition);
  return primes[primePosition - 1];
}

function generatePrimesUntilValue(target) {
  let candidate = primes.at(-1) + 1;

  if (candidate % 2 === 0) {
    candidate++;
  }

  while (primes.at(-1) < target) {
    if (isPrimeUsingCache(candidate)) {
      primes.push(candidate);
      primeToPosition.set(candidate, primes.length);
    }

    candidate += 2;
  }
}

function generatePrimesUntilPosition(position) {
  let candidate = primes.at(-1) + 1;

  if (candidate % 2 === 0) {
    candidate++;
  }

  while (primes.length < position) {
    if (isPrimeUsingCache(candidate)) {
      primes.push(candidate);
      primeToPosition.set(candidate, primes.length);
    }

    candidate += 2;
  }
}

function isPrimeUsingCache(number) {
  const boundary = Math.sqrt(number);

  for (const prime of primes) {
    if (prime > boundary) {
      break;
    }

    if (number % prime === 0) {
      return false;
    }
  }

  return true;
}
