// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) => [1,2,3,6,9,8,7,4,5]

export function snail(array) {
  const DIRECTIONS = { RIGHT: 'right', DOWN: 'down', LEFT: 'left', UP: 'up' };

  let numbersChecked = 0;
  const checkedIndexes = new Set();
  const result = [];

  if (array[0].length === 0) return result;

  let checkingDirection = DIRECTIONS.RIGHT;
  let indexX = 0;
  let indexY = 0;

  while (numbersChecked !== array.length * array[0].length) {
    const checkingValue = array[indexX]?.[indexY];
    const isNotCheckedNumber = checkingValue !== undefined && !checkedIndexes.has(`${indexX},${indexY}`);

    if (isNotCheckedNumber) {
      result.push(checkingValue);
      checkedIndexes.add(`${indexX},${indexY}`);
      numbersChecked++;

      if (checkingDirection === DIRECTIONS.RIGHT) {
        indexY++;
      } else if (checkingDirection === DIRECTIONS.DOWN) {
        indexX++;
      } else if (checkingDirection === DIRECTIONS.LEFT) {
        indexY--;
      } else if (checkingDirection === DIRECTIONS.UP) {
        indexX--;
      }
    } else {
      if (checkingDirection === DIRECTIONS.RIGHT) {
        indexX++;
        indexY--;
        checkingDirection = DIRECTIONS.DOWN;
      } else if (checkingDirection === DIRECTIONS.DOWN) {
        indexX--;
        indexY--;
        checkingDirection = DIRECTIONS.LEFT;
      } else if (checkingDirection === DIRECTIONS.LEFT) {
        indexX--;
        indexY++;
        checkingDirection = DIRECTIONS.UP;
      } else if (checkingDirection === DIRECTIONS.UP) {
        indexX++;
        indexY++;
        checkingDirection = DIRECTIONS.RIGHT;
      }
    }
  }

  return result;
  // 00, 01, 02, 12, 22, 21, 20, 10, 11
}
