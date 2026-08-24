export function determinant(m) {
  // 1x1
  if (m.length === 1) {
    return m[0][0];
  }

  // 2x2
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  // nxn
  let result = 0;

  for (let col = 0; col < m.length; col++) {
    const sign = col % 2 === 0 ? 1 : -1;
    const element = m[0][col];

    const minor = m
      .slice(1)
      .map((row) => row.filter((_, index) => index !== col));

    result += sign * element * determinant(minor);
  }

  return result;
}
