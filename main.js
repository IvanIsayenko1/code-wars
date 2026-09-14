import { calc } from "./code-wars/katas/rank-2/evaluate-mathematical-expression.ts";
import { part } from "./code-wars/katas/rank-4/integer-partions-ts.ts";
import { calculate } from "./code-wars/katas/rank-4/route-calculator.ts";
import { decompose } from "./code-wars/katas/rank-4/square-into-squares.js";
import { ipsBetween } from "./code-wars/katas/rank-5/count-ip-addresses.js";
import { dirReduc } from "./code-wars/katas/rank-5/directions-reduction.js";
import { score } from "./code-wars/katas/rank-5/greed-is-good.js";
import { humanReadable } from "./code-wars/katas/rank-5/human-readable-time.js";
import { PaginationHelper } from "./code-wars/katas/rank-5/pagination-helper.js";
import { perimeter } from "./code-wars/katas/rank-5/perimeter-of-squares.js";
import { productFib } from "./code-wars/katas/rank-5/product-of-consecutive-fib-numbers.js";
import { rgb } from "./code-wars/katas/rank-5/rgb-to-hex.js";
import { scramble } from "./code-wars/katas/rank-5/scramblies.js";
import { pigIt } from "./code-wars/katas/rank-5/simple-pig-latin.js";
import { orderWeight } from "./code-wars/katas/rank-5/weight-for-weight.js";

console.log(calc("(1 - 2) + -(-(-(-4)))"));
// "(1 - 2) + -(-(-(-4)))"
// "(-1) + -(-(-(-4)))"
// "(-1) + -(-(+4))"
// "(-1) + -(-4)"
//
//
//
// "1*1*1*1*1*1$1$1$1$1+1-1+9-1"
// "1$1$1$1$1+1-1+9-1"
// "1+1-1+9-1"

// ["WEST","EAST","NORTH","SOUTH","NORTH","EAST","WEST","EAST","NORTH","SOUTH"]
// ["NORTH","SOUTH","NORTH","EAST","WEST","EAST","NORTH","SOUTH"]
// ["NORTH","EAST","WEST","EAST","NORTH","SOUTH"]
// ["NORTH","EAST","NORTH","SOUTH"]
// ["NORTH","EAST",]
