'use strict';

function __DECODE_0__(Gimxfk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 362;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Gimxfk, key);
}
function __STRING_ARRAY__() {
  const _0x160c4f = ["204450Caxekx", "split", "utf8", "log", "sort", "3BCrynI", "3127240gjDSMP", "toString", "2436168TFmbAN", "9340533LktNrt", "4447737vmwVUY", "8gjqxbu", "485714yxZwNO", "shift", "2640388hQWIrV"];
  __STRING_ARRAY__ = function () {
    return _0x160c4f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("485714yxZwNO") / 1 + -parseInt("204450Caxekx") / 2 + -parseInt("3BCrynI") / 3 * (parseInt("2640388hQWIrV") / 4) + parseInt("3127240gjDSMP") / 5 + parseInt("2436168TFmbAN") / 6 + parseInt("4447737vmwVUY") / 7 + parseInt("8gjqxbu") / 8 * (-parseInt("9340533LktNrt") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 352422);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cin = input.trim()["split"](/ |\n/);
var cid = 0;
console["log"](main()["toString"]());
function main() {
  let n = +cin["shift"]();
  let a = Array(n);
  let b = Array(n);
  for (let i = 0; i < n; i++) {
    a[i] = +cin["shift"]();
    b[i] = +cin["shift"]();
  }
  a = a["sort"]((x, y) => x - y);
  b = b["sort"]((x, y) => x - y);
  let min;
  let max;
  if (n % 2 == 0) {
    if (a[n / 2 - 1] != a[n / 2]) {
      min = a[n / 2] - 1 / 2;
    } else {
      min = a[2 / n];
    }
    if (b[n / 2 - 1] != b[n / 2]) {
      max = b[n / 2 - 1] + 1 / 2;
    } else {
      max = b[n / 2 - 1];
    }
    return (max - min) * 2 + 1;
  } else {
    min = a[(n - 1) / 2];
    max = b[(n - 1) / 2];
    return max - min + 1;
  }
}
