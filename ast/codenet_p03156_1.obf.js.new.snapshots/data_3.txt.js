'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("694945gFPnST") / 1 + parseInt("1093934hUmays") / 2 + -parseInt("305211yfEktY") / 3 + -parseInt("107456CxOqdK") / 4 * (-parseInt("45uksXMO") / 5) + -parseInt("77010JRAtIq") / 6 * (-parseInt("329xwMdgJ") / 7) + parseInt("4689608zFqVfr") / 8 + -parseInt("7145370IqjVZK") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 387577);
function __STRING_ARRAY__() {
  const _0x15ced0 = ["min", "45uksXMO", "map", "4689608zFqVfr", "push", "305211yfEktY", "split", "length", "7145370IqjVZK", "utf8", "77010JRAtIq", "329xwMdgJ", "/dev/stdin", "log", "trim", "1093934hUmays", "694945gFPnST", "107456CxOqdK"];
  __STRING_ARRAY__ = function () {
    return _0x15ced0;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  let xs = input["trim"]()["split"]("\n");
  let N = Number(xs[0]);
  let A = Number(xs[1]["split"](" ")[0]);
  let B = Number(xs[1]["split"](" ")[1]);
  let P1 = [];
  let P2 = [];
  let P3 = [];
  let P = xs[2]["split"](" ")["map"](v => parseInt(v, 10));
  for (let i = 0; i < N; i++) {
    if (P[i] <= A) {
      P1["push"](P[i]);
    } else if (P[i] <= B) {
      P2["push"](P[i]);
    } else {
      P3.push(P[i]);
    }
  }
  let ans = Math["min"](P1["length"], P2.length, P3["length"]);
  console["log"](ans);
};
function __DECODE_0__(JQREaZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 272;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JQREaZ, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
