'use strict';

function __DECODE_0__(wWvusr, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 387;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wWvusr, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("465475uwqEEQ") / 1 + parseInt("118lbqMIF") / 2 * (parseInt("16266mpoODc") / 3) + parseInt("3098788lQFFcV") / 4 + parseInt("2316860qFobjq") / 5 + parseInt("2946vCGiLe") / 6 * (-parseInt("1113OsxyIj") / 7) + -parseInt("16fCaZkh") / 8 * (parseInt("860589mKDjdB") / 9) + -parseInt("13559520JuyHnC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 398179);
function Main(input) {
  input = input["trim"]()["split"]("\n");
  const N = Number(input[0]);
  const H = input[1]["trim"]()["split"](" ")["map"](Number);
  let ret = 0;
  let move = 0;
  for (let i = 0; i < N; i++) {
    if (H[i] >= H[i + 1]) {
      move += 1;
    } else {
      ret = Math["max"](ret, move);
      move = 0;
    }
  }
  console.log(ret);
}
function __STRING_ARRAY__() {
  const _0x1118ba = ["118lbqMIF", "max", "16fCaZkh", "13559520JuyHnC", "utf8", "860589mKDjdB", "16266mpoODc", "split", "map", "1113OsxyIj", "2316860qFobjq", "3098788lQFFcV", "trim", "2946vCGiLe", "465475uwqEEQ"];
  __STRING_ARRAY__ = function () {
    return _0x1118ba;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
