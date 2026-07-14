import { convertQueryToMap } from "./convert-query-to-map.js";
import { snail } from "./snail.js";
import { getPINs } from "./the-observed-pin.js";
import { undoRedo } from "./undo-redo.js";

// console.log(getPINs(64738));
// console.log(snail([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]));
// console.log(convertQueryToMap(''));

var obj = {};
var unRe = undoRedo(obj);
unRe.set('x', 5);
unRe.set('y', 6);
console.log(obj);
unRe.undo();
console.log(obj);
unRe.set('y', 66);
console.log(obj);
try{
  unRe.redo();
  console.log(obj);
} catch (e) {
  console.log(e);
} finally {
  console.log(obj);
}
// unRe.set('y', 10);
// unRe.set('y', 100);
// unRe.set('x', 150);
// unRe.set('x', 50);
// console.log(unRe.get('y'));
// console.log(unRe.get('x'));
// unRe.undo();
// console.log(unRe.get('x'));
// console.log(unRe.get('y'));
// unRe.redo();
// console.log(unRe.get('x'));
// console.log(unRe.get('y'));
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('x'));
// console.log(unRe.get('y'));
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('y'));
// console.log(unRe.get('x'));
// // unRe.undo();
// unRe.redo();
// unRe.redo();
// unRe.redo();
// unRe.redo();
// console.log(unRe.get('y'));
// console.log(unRe.get('x'));
