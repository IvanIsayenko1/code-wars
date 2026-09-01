export const decode = function (w) {
  const possibleChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ";
  let result = "";

  for (let i = 0; i < w.length; i++) {
    const targetChar = w[i];
    let found = false;

    for (let char of possibleChars) {
      const testString = "_".repeat(i) + char;

      if (device.encode(testString)[i] === targetChar) {
        result += char;
        found = true;
        break;
      }
    }

    if (!found) result += targetChar;
  }

  return result;
};
