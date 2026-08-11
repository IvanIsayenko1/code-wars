// export function properFractions(n) {
//   let resultsCount = 0;
//   const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

//   for (let i = 1; i < n; i++) {
//     const gcdResult = gcd(n, i);
//     if (gcdResult < 2) {
//       resultsCount++;
//     }
//   }

//   return resultsCount;
// }

// this is optimized funcions for big numbers
export function properFractions(n) {
  if (n == 1) return 0;

  const divisors = getPrimeDivisors(n);

  let result = n;

  for (const divisor of divisors) {
    result = (result / divisor) * (divisor - 1);
  }

  return Math.round(result);
}

function getPrimeDivisors(num) {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);

      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }

  return divisors.filter((d) => isPrime(d)).sort((a, b) => a - b);
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
