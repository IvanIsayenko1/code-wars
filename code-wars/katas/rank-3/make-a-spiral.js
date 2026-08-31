export function spiralize(n) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  let x = 0,
    y = 0;

  let drawingSnail = true;
  let direction = "right";

  while (drawingSnail) {
    if (direction == "right") {
      result[x][y] = 1;
      y++;

      if (result[x][y + 1] == 1 && result[x + 2][y - 1]) {
        drawingSnail = false;
      }

      if (y == n || result[x][y + 1] == 1) {
        direction = "down";
        x++;
        y--;
      }
    } else if (direction == "down") {
      result[x][y] = 1;
      x++;

      if (result[x + 1]?.[y] == 1 && result[x - 2]?.[y - 1] == 1) {
        drawingSnail = false;
      }

      if (x == n || result[x + 1]?.[y] == 1) {
        // going left
        direction = "left";
        x--;
      }
    } else if (direction == "left") {
      result[x][y] = 1;
      y--;

      if (result[x][y - 1] == 1 && result[x - 2][y] == 1) {
        drawingSnail = false;
      }

      if (y == -1 || result[x][y - 1] == 1) {
        // going up
        direction = "up";
        y++;
        x--;
      }
    } else if (direction == "up") {
      result[x][y] = 1;
      x--;

      if (result[x - 1][y] == 1 && result[x + 2][y + 1] == 1) {
        drawingSnail = false;
      }

      if (result[x - 1][y] == 1) {
        direction = "right";
        x++;
        y++;
      }
    }
  }

  return result;
}

// Your task, is to create a NxN spiral with a given size.
// For example, spiral with size 5 should look like this:
// 00000
// ....0
// 000.0
// 0...0
// 00000
//
// and with the size 10:
//
// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
