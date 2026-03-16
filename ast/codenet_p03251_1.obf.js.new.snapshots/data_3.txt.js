'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1226cwEwWs") / 1 * (-parseInt("208KLfttl") / 2) + parseInt("1340265AvBbbU") / 3 + parseInt("1377196bXzJKv") / 4 + parseInt("6596190QHPyij") / 5 + parseInt("4306392rZWELZ") / 6 + -parseInt("9369367HKojkW") / 7 * (parseInt("8PfIiFu") / 8) + parseInt("5721867TtShPU") / 9 * (-parseInt("10Tobghl") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 726276);
function __DECODE_0__(gsKuja, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 298;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gsKuja, key);
}
const main = input => {
  const num = input[0]["split"](" ")["map"](val => parseInt(val));
  const N = num[0];
  const M = num[1];
  const X = num[2];
  const Y = num[3];
  const x = input[1]["split"](" ")["map"](val => parseInt(val));
  const y = input[2]["split"](" ")["map"](val => parseInt(val));
  const xMax = Math.max(...x);
  const yMin = Math["min"](...y);
  let ans = 0;
  for (let z = X + 1; z <= Y; z++) {
    if (xMax < z && yMin >= z) {
      ans = 1;
      break;
    }
  }
  console["log"](ans == 1 ? "No War" : "War");
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
function __STRING_ARRAY__() {
  const _0x1604bc = ["split", "log", "1226cwEwWs", "1377196bXzJKv", "readFileSync", "1340265AvBbbU", "208KLfttl", "4306392rZWELZ", "5721867TtShPU", "9369367HKojkW", "6596190QHPyij", "War", "map", "min", "10Tobghl", "/dev/stdin", "No War", "8PfIiFu"];
  __STRING_ARRAY__ = function () {
    return _0x1604bc;
  };
  return __STRING_ARRAY__();
}
