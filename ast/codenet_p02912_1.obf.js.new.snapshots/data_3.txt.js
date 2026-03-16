'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("42WNtVqx") / 1 * (-parseInt("10886iKoQLz") / 2) + -parseInt("320145qfESxl") / 3 + -parseInt("1056ysyDSe") / 4 * (parseInt("4890XTvrHg") / 5) + parseInt("187044apmqZr") / 6 + -parseInt("46711qcfroy") / 7 * (parseInt("8kVPcwz") / 8) + -parseInt("915318wsBrsS") / 9 + -parseInt("10yFrnUw") / 10 * (-parseInt("8999650XAPGAk") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 147436);
function __DECODE_0__(JitCMS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 387;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JitCMS, key);
}
const arg_str = require("fs")["readFileSync"]("/dev/stdin", "UTF-8");
function __STRING_ARRAY__() {
  const _0x11078c = ["map", "8kVPcwz", "915318wsBrsS", "1056ysyDSe", "4890XTvrHg", "46711qcfroy", "apply", "42WNtVqx", "readFileSync", "/dev/stdin", "log", "320145qfESxl", "split", "187044apmqZr", "UTF-8", "10yFrnUw", "floor", "10886iKoQLz", "8999650XAPGAk"];
  __STRING_ARRAY__ = function () {
    return _0x11078c;
  };
  return __STRING_ARRAY__();
}
const args_lines = arg_str.split("\n");
const n_m = args_lines[0].split(" ");
const N = n_m[0];
const M = n_m[1];
let A_array = args_lines[1]["split"](" ");
A_array = A_array["map"](x => parseInt(x));
for (let i = 0; i < M; i++) {
  const max_value = Math.max["apply"](null, A_array);
  const max_index = A_array.indexOf(max_value);
  A_array[max_index] = A_array[max_index] / 2;
}
const result = A_array["map"](x => Math["floor"](x)).reduce((a, x) => a += x, 0);
console["log"](result);
