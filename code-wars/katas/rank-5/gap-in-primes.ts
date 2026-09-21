/**
 * @see https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/typescript
 * @param g
 * @param m
 * @param n
 * @returns
 */
export const gap = (g: number, m: number, n: number): number[] | null => {
  const getNextPrime = (prime: number) => {
    prime++;

    if (prime === 2) return prime;

    while (true) {
      if (prime <= 1 || prime % 2 === 0) {
        prime++;
      } else {
        const limit = Math.sqrt(prime);
        let isPrime = true;
        for (let i = 3; i <= limit; i += 2) {
          if (prime % i === 0) {
            isPrime = false;
            prime++;
            break;
          }
        }
        if (isPrime) break;
      }
    }

    return prime;
  };

  let prevPrime = getNextPrime(m - 1);
  let nextPrime = getNextPrime(prevPrime);

  while (nextPrime - prevPrime !== g && nextPrime < n) {
    prevPrime = nextPrime;
    nextPrime = getNextPrime(prevPrime);
  }

  return nextPrime < n ? [prevPrime, nextPrime] : null;
};
