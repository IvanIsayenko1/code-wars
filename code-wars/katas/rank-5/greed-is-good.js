/**
 * @see https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 * @param {number[]} dice
 * @returns {number}
 */
export function score(dice) {
  const VALUES = {
    1: 100,
    11: 200,
    5: 50,
    55: 100,
    222: 200,
    333: 300,
    444: 400,
    555: 500,
    666: 600,
    111: 1000,
  };

  return (
    [...dice]
      .sort((a, b) => a - b)
      .join("")
      .match(/([15])\1{0,2}|([2346])\2{2}/g) || []
  ).reduce((acc, count) => {
    return acc + VALUES[count];
  }, 0);

  // const counts = dice.reduce((acc, num) => {
  //   acc[num] = (acc[num] || 0) + 1;
  //   return acc;
  // }, {});
  // let res = 0;
  // for (const [key, value] of Object.entries(counts)) {
  //   if (key != 1 && key != 5 && value < 3) continue;
  //   if (key == 1) {
  //     if (value > 2) {
  //       res += key * 1000 * Math.floor(value / 3);
  //     }
  //     res += key * 100 * (value % 3);
  //     continue;
  //   }
  //   if (key == 5) {
  //     if (value > 2) {
  //       res += key * 100 * Math.floor(value / 3);
  //     }
  //     res += key * 10 * (value % 3);
  //     continue;
  //   }
  //   res += key * 100 * Math.floor(value / 3);
  // }
  // return res;
}
