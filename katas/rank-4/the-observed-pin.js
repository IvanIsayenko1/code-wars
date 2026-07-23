// "8": ["5", "7", "8", "9", "0"],
// "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],

export function getPINs(observed) {
  const layout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [undefined, 0, undefined],
  ];

  const results = [];

  for (let n of observed.toString()) {
    for (let row = 0; row < 4; row++) {
      const position = layout[row].indexOf(+n);
      if (position === -1) continue;
      const numberResult = [];

      // we need to chec top: row -1, position
      if (layout[row - 1]?.[position] !== undefined)
        numberResult.push(layout[row - 1][position]);

      // we need to check left: row, position - 1
      if (layout[row]?.[position - 1] !== undefined)
        numberResult.push(layout[row][position - 1]);

      // we need to check the current: row, position
      if (layout[row]?.[position] !== undefined)
        numberResult.push(layout[row][position]);

      // we need to check right: row, position + 1
      if (layout[row]?.[position + 1] !== undefined)
        numberResult.push(layout[row][position + 1]);

      // we need to check bottom: row + 1, position
      if (layout[row + 1]?.[position] !== undefined)
        numberResult.push(layout[row + 1][position]);

      results.push(numberResult);
    }
  }

  const result = getVariations(results, 0);
  return result;
}

const getVariations = (results, index) => {
  const variations = [];
  for (let i = 0; i < results[index].length; i++) {
    if (index !== results.length - 1) {
      getVariations(results, index + 1).forEach((v) => {
        variations.push(`${results[index][i]}${v}`);
      });
    } else {
      variations.push(results[index][i].toString());
    }
  }
  return variations;
};
