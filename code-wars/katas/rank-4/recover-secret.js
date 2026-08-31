export var recoverSecret = function (triplets) {
  const result = [];

  for (let i = 0; i < triplets.length; i++) {
    if (!i) {
      result.push(...triplets[i]);
      continue;
    }

    for (let x = triplets[i].length - 1; x >= 0; x--) {
      const letter = triplets[i][x];
      const nextLetter = triplets[i][x + 1];

      if (x == triplets[i].length - 1 && !result.includes(letter)) {
        result.unshift(letter);
      } else {
        if (!result.includes(letter)) {
          const indexInsertBefore = result.indexOf(nextLetter);
          result.splice(indexInsertBefore, 0, letter);
          continue;
        }
      }

      if (x == triplets[i].length - 1) continue;

      // check the order
      const indexLetter = result.indexOf(letter);
      const indexNextLetter = result.indexOf(nextLetter);

      if (indexLetter > indexNextLetter) {
        const [l] = result.splice(indexNextLetter, 1);
        const targetIndex =
          indexNextLetter < indexLetter ? indexLetter : indexLetter + 1;
        result.splice(targetIndex, 0, l);
      }
    }
  }

  return result.join("");
};
