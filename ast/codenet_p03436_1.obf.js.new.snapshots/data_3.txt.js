'use strict';

function __DECODE_0__(dLJdny, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 171;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dLJdny, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("95ZPKbJi") / 1 * (parseInt("14794twJnpe") / 2) + parseInt("152115MNJvJR") / 3 * (parseInt("8BSrkuq") / 4) + -parseInt("125HWjOhg") / 5 * (-parseInt("40434rMdovR") / 6) + parseInt("791bfODpX") / 7 * (-parseInt("87528jSvHuk") / 8) + -parseInt("9eGCqqd") / 9 * (-parseInt("15913910ApzFwS") / 10) + parseInt("4741mMGnlI") / 11 * (-parseInt("23196YoNzfK") / 12) + parseInt("1651pJBFnW") / 13 * (parseInt("35714KPGucx") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 818512);
function __STRING_ARRAY__() {
  const _0x1f0b76 = ["trim", "95ZPKbJi", "4741mMGnlI", "1651pJBFnW", "push", "readFileSync", "15913910ApzFwS", "87528jSvHuk", "791bfODpX", "9eGCqqd", "split", "shift", "fill", "23196YoNzfK", "/dev/stdin", "8BSrkuq", "14794twJnpe", "35714KPGucx", "125HWjOhg", "40434rMdovR", "map", "152115MNJvJR"];
  __STRING_ARRAY__ = function () {
    return _0x1f0b76;
  };
  return __STRING_ARRAY__();
}
console.log(function (args) {
  const tmp = args["trim"]()["split"]("\n");
  const HW = tmp[0]["split"](" ")["map"](v => v | 0);
  const H = HW[0];
  const W = HW[1];
  const map = [Array(W + 2)["fill"](Infinity)];
  let s = 0;
  for (let y = 1; y <= H; y++) {
    map["push"]([Infinity]);
    for (let x = 0; x < W; x++) {
      if (tmp[y][x] === ".") {
        s++;
        map[y].push(0);
      } else {
        map[y]["push"](Infinity);
      }
    }
    map[y]["push"](Infinity);
  }
  map["push"](Array(W + 2)["fill"](Infinity));
  const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const queue = [[1, 1, 2]];
  do {
    const q = queue["shift"]();
    for (const d of dir) {
      const x = q[0] + d[0];
      const y = q[1] + d[1];
      if (x === W && y === H) {
        return s - q[2];
      }
      if (map[y][x] === 0) {
        map[y][x] = q[2] + 1;
        queue.push([x, y, q[2] + 1]);
      }
    }
  } while (queue[0]);
}(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
