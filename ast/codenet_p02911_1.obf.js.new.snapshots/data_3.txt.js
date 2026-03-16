'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("291271WaWqzm") / 1 * (-parseInt("10KUvQdS") / 2) + -parseInt("40845wberzV") / 3 * (-parseInt("204iZnipU") / 4) + -parseInt("4115mxZtEY") / 5 * (-parseInt("4242lPKewm") / 6) + -parseInt("1122058XTqBiN") / 7 + -parseInt("11038368PQyExg") / 8 + -parseInt("8624268JiBxcl") / 9 + parseInt("6597500OnMaWv") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 893989);
let arg_str = require("fs").readFileSync("/dev/stdin", "UTF-8");
arg_str = arg_str["split"]("\n");
const arg_str_0 = arg_str[0].split(" ");
function __STRING_ARRAY__() {
  const _0x524816 = ["slice", "1122058XTqBiN", "forEach", "40845wberzV", "/dev/stdin", "split", "204iZnipU", "11038368PQyExg", "UTF-8", "10KUvQdS", "6597500OnMaWv", "291271WaWqzm", "log", "Yes", "4242lPKewm", "4115mxZtEY", "map", "8624268JiBxcl"];
  __STRING_ARRAY__ = function () {
    return _0x524816;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(YCuAgF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 169;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YCuAgF, key);
}
const N = arg_str_0[0];
const K = arg_str_0[1];
const Q = arg_str_0[2];
const A_array = arg_str["slice"](1);
let result_val = [];
for (let i = 0; i < N; i++) {
  result_val[i] = K;
}
A_array["forEach"]((item, index) => {
  for (let i = 0; i < N; i++) {
    if (item - 1 != i) {
      result_val[i]--;
    }
  }
});
result_val["map"](x => x > 0 ? console["log"]("Yes") : console["log"]("No"));
