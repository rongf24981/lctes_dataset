'use strict';

function __STRING_ARRAY__() {
  const _0x20eebc = ["log", "2241dXZwoc", "63WvHxCq", "624390iFCGYU", "map", "/dev/stdin", "3464etprws", "readFileSync", "utf8", "32ugtxUC", "sort", "613944ZVMNmQ", "3001465pAdQtf", "split", "1101160bthUkZ", "70762enZCoO", "shift", "7662220QaseVR"];
  __STRING_ARRAY__ = function () {
    return _0x20eebc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("70762enZCoO") / 1 * (-parseInt("32ugtxUC") / 2) + -parseInt("624390iFCGYU") / 3 + -parseInt("1101160bthUkZ") / 4 + parseInt("3001465pAdQtf") / 5 + -parseInt("613944ZVMNmQ") / 6 * (-parseInt("63WvHxCq") / 7) + -parseInt("3464etprws") / 8 * (-parseInt("2241dXZwoc") / 9) + parseInt("7662220QaseVR") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 779636);
function __DECODE_0__(ZQsIcU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 462;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZQsIcU, key);
}
function main(input) {
  const lines = input["split"]("\n");
  const N = parseInt(lines["shift"]());
  const A = lines.shift().split(" ")["map"](x => parseInt(x))["sort"]((a, b) => a - b);
  const B = lines.shift()["split"](" ")["map"](x => parseInt(x))["sort"]((a, b) => a - b);
  const C = lines["shift"]()["split"](" ")["map"](x => parseInt(x))["sort"]((a, b) => a - b);
  let result = 0;
  for (let b = 0; b < N; b++) {
    let current_b = B[b];
    let count_a = N;
    for (let a = 0; a < N; a++) {
      if (current_b <= A[a]) {
        count_a--;
      }
    }
    let count_c = N;
    for (let c = 0; c < N; c++) {
      if (current_b >= C[c]) {
        count_c--;
      }
    }
    result += count_a * count_c;
  }
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
