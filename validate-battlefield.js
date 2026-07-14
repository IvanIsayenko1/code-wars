export function validateBattlefield(field) {
  const result = [0, 0, 0, 0];

  var boatsCellsIndexes = field.flatMap((row, rowIndex) =>
    row.flatMap((value, colIndex) =>
      value === 1 ? [`${rowIndex},${colIndex}`] : []
    )
  );

  for (let i = 0; i < boatsCellsIndexes.length; i++){
    let checkingIndex = boatsCellsIndexes[i];
    var boatLength = 0;
    if (checkingIndex === null) continue;
    const [x, y] = checkingIndex.split(',');
    checkTheBoat(x, y);
    result[boatLength - 1] = ++result[boatLength - 1];
  }

  function checkTheBoat(x, y) {
    const isGoingDown= boatsCellsIndexes.includes(`${+x + 1},${+y}`);
    const isGoingRight = boatsCellsIndexes.includes(`${+x},${+y + 1}`);
    const hasRightDiagonaBoatCell = boatsCellsIndexes.includes(`${+x + 1},${+y + 1}`);
    const hasLeftDiagonaBoatCell = boatsCellsIndexes.includes(`${+x + 1},${+y +- 1}`);

    if (isGoingRight && isGoingDown || isGoingRight && hasRightDiagonaBoatCell || isGoingDown && hasRightDiagonaBoatCell || isGoingRight && hasLeftDiagonaBoatCell || isGoingDown && hasLeftDiagonaBoatCell) {
      return false;
    }

    const currentSectionOfTheBoatIndex = boatsCellsIndexes.indexOf(`${+x},${+y}`);
    const nextSectionOfTheBoatIndex = boatsCellsIndexes.indexOf(isGoingDown ? `${+x + 1},${+y}` : `${+x},${+y + 1}`);
    boatsCellsIndexes[currentSectionOfTheBoatIndex] = null;
    boatLength++;

    if (nextSectionOfTheBoatIndex !== -1) {
      checkTheBoat(isGoingDown ? +x + 1 : +x, isGoingDown ? y : +y + 1);
    }
  }

  return result[0] === 4 && result[1] === 3 && result[2] === 2 && result[3] === 1;
}
