'use strict';

function __STRING_ARRAY__() {
  const _0x2a4c8d = ["max", "log", "35988sXMjIh", "/dev/stdin", "indexOf", "split", "2240298VLjJDK", "47176wgqidq", "147InumRb", "stringify", "readFileSync", "find", "map", "6270HjVIlJ", "1049QEOCHC", "786WJvOXJ", "854eDeDPK", "4781136GDedUu", "5300nbwwUj", "2509010ggMOzC"];
  __STRING_ARRAY__ = function () {
    return _0x2a4c8d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1049QEOCHC") / 1 * (parseInt("786WJvOXJ") / 2) + parseInt("147InumRb") / 3 * (parseInt("35988sXMjIh") / 4) + -parseInt("2509010ggMOzC") / 5 + parseInt("4781136GDedUu") / 6 + -parseInt("854eDeDPK") / 7 * (parseInt("47176wgqidq") / 8) + -parseInt("2240298VLjJDK") / 9 + -parseInt("5300nbwwUj") / 10 * (-parseInt("6270HjVIlJ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 481908);
const arg_str = require("fs")["readFileSync"]("/dev/stdin", "UTF-8");
const args_lines = arg_str["split"]("\n");
const n = args_lines[0];
const a = args_lines[1]["split"](" ")["map"](x => parseInt(x));
const b = args_lines[2]["split"](" ").map(x => parseInt(x));
function __DECODE_0__(SeLPCQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 199;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SeLPCQ, key);
}
let cnt = 0;
let current_b = b;
while (true) {
  const max_index = current_b["indexOf"](Math["max"](...current_b));
  if (max_index == 0) {
    current_b[max_index] = current_b[max_index] - current_b[1] - current_b[n - 1];
  } else if (max_index == n - 1) {
    current_b[max_index] = current_b[max_index] - current_b[n - 2] - current_b[0];
  } else {
    current_b[max_index] = current_b[max_index] - current_b[max_index - 1] - current_b[max_index + 1];
  }
  cnt++;
  if (JSON.stringify(current_b) == JSON["stringify"](a)) {
    console["log"](cnt);
    break;
  }
  if (current_b["find"](x => x < 1)) {
    console["log"](-1);
    break;
  }
}
