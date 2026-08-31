/**
 * @see https://www.codewars.com/kata/5518a860a73e708c0a000027/train/javascript
 * @param {Array<number|string>} as
 * @returns {number}
 */
export function lastDigit(as) {
  if (as.length === 0) return 1;

  return solve(as, 0);
}

function solve(as, index) {
  const base = Number(as[index]) % 10;

  // Last number: a^1
  if (index === as.length - 1) {
    return base;
  }

  // We need the exponent.
  const exponent = solveExponent(as, index + 1);

  // 0^0 = 1
  if (base === 0 && exponent === 0) {
    return 1;
  }

  const cycle = getCycle(base);

  const position = exponent % cycle.length;

  // 0 means the last element of the cycle
  return cycle[position === 0 ? cycle.length - 1 : position - 1];
}

function solveExponent(as, index) {
  if (index === as.length - 1) {
    return Number(as[index]);
  }

  const base = Number(as[index]);

  // Calculate the exponent recursively.
  const exponent = solveExponent(as, index + 1);

  return powMod(base, exponent, 10);
}

function getCycle(base) {
  const lastDigit = base % 10;
  const cycle = [];

  let current = lastDigit;

  while (!cycle.includes(current)) {
    cycle.push(current);
    current = (current * lastDigit) % 10;
  }

  return cycle;
}

function powMod(base, exponent, mod) {
  let result = 1;

  base %= mod;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % mod;
    }

    base = (base * base) % mod;
    exponent = Math.floor(exponent / 2);
  }

  return result;
}

// function lastDigit(as) {
//   if (!as.length) return 1;

//   for (let i = as.length - 1; i > 0; i--) {
//    as[i - 1] =
//       BigInt(as[i - 1].toString()[as[i - 1].toString().length - 1]) **
//       BigInt(as[i]);
//   }

//   return +as[0].toString()[as[0].toString().length - 1];
// }
