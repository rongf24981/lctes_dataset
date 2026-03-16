'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("133799iWzFkO") / 1 + parseInt("116784cNgwUW") / 2 + -parseInt("188649kSIgsR") / 3 + parseInt("417856nhrgxE") / 4 + parseInt("2855YpbmAw") / 5 * (-parseInt("822IopvSp") / 6) + -parseInt("34062ybQGuI") / 7 + -parseInt("389384GMpMyO") / 8 * (parseInt("9IDMZHw") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 102006);
function __STRING_ARRAY__() {
  const _0x4325fb = ["133799iWzFkO", "/dev/stdin", "MIN_SAFE_INTEGER", "34062ybQGuI", "trim", "shift", "readFileSync", "length", "389384GMpMyO", "map", "log", "9IDMZHw", "sort", "2855YpbmAw", "split", "417856nhrgxE", "822IopvSp", "188649kSIgsR", "116784cNgwUW"];
  __STRING_ARRAY__ = function () {
    return _0x4325fb;
  };
  return __STRING_ARRAY__();
}
let a = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n");
a["shift"]();
function __DECODE_0__(ENRdcA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ENRdcA, key);
}
let d = a["map"](e => {
  let r = e["split"](" ")["map"](Number);
  return [r[0] - r[1], r[1] + r[0]];
})["sort"]((a, b) => {
  return a[1] - b[1];
});
let s = 0;
let P = Number["MIN_SAFE_INTEGER"];
for (let i = 0; i < d["length"]; i++) {
  if (P <= d[i][0]) {
    s++;
    P = d[i][1];
  }
}
console["log"](s);
