function solution(number) {
  return [
    ...new Set([
      ...Array.from(
        {
          length: Math.floor((number - 1) / 3),
        },
        (_, i) => (i + 1) * 3,
      ),
      ...Array.from(
        { length: Math.floor((number - 1) / 5) },
        (_, i) => (i + 1) * 5,
      ),
    ]),
  ].reduce((acc, n) => acc + n, 0);
}
