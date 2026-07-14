import { convertQueryToMap } from "./convert-query-to-map.js";
import { snail } from "./snail.js";
import { getPINs } from "./the-observed-pin.js";
import { undoRedo } from "./undo-redo.js";
import { validateBattlefield } from "./validate-battlefield.js";

// console.log(getPINs(64738));
// console.log(snail([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]));
// console.log(convertQueryToMap(''));

// var obj = {};
// var unRe = undoRedo(obj);
// unRe.set('x', 5);
// unRe.set('y', 6);
// console.log(obj);
// unRe.undo();
// console.log(obj);
// unRe.set('y', 66);
// console.log(obj);
// try{
//   unRe.redo();
//   console.log(obj);
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log(obj);
// }
//
const battlefield = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(validateBattlefield(battlefield));
