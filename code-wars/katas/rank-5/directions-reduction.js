/**
 * @see https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 * @param {string[]} arr
 * @returns {string[]}
 */
export function dirReduc(arr) {
  while (true) {
    let isDirCool = true;

    arr = arr.filter((dir, i) => {
      if (
        (dir === "NORTH" && arr[i + 1] === "SOUTH") ||
        (dir === "SOUTH" && arr[i + 1] === "NORTH") ||
        (dir === "EAST" && arr[i + 1] === "WEST") ||
        (dir === "WEST" && arr[i + 1] === "EAST")
      ) {
        arr.splice(i + 1, 1);
        isDirCool = false;
        return false;
      } else {
        return true;
      }
    });

    if (isDirCool) break;
  }

  return arr;
}
