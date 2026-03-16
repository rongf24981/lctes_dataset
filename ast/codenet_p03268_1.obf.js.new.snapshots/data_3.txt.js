'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1EClxrI") / 1 * (parseInt("865286mAumlX") / 2) + parseInt("2619951WQftsj") / 3 + parseInt("495828uoxSeC") / 4 * (parseInt("5bjiKpD") / 5) + parseInt("7746324lxTWXt") / 6 + parseInt("1618582GTCVvy") / 7 + parseInt("2032LAaMyN") / 8 * (-parseInt("43677wcUtKK") / 9) + -parseInt("7585000FYDnPL") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 961035);
function Main(input) {
  input = input["split"]("\n");
  const line0 = input[0]["split"](" ");
  let N = parseInt(line0[0]);
  let K = parseInt(line0[1]);
  if (K % 2 === 0) {
    console["log"](Math["floor"](N / K) ** 3 + Math.floor((N + K / 2) / K) ** 3);
  } else {
    console["log"](Math["floor"](N / K) ** 3);
  }
}
function __STRING_ARRAY__() {
  const _0x46493d = ["log", "1618582GTCVvy", "2619951WQftsj", "5bjiKpD", "utf8", "865286mAumlX", "2032LAaMyN", "7746324lxTWXt", "readFileSync", "split", "floor", "43677wcUtKK", "/dev/stdin", "1EClxrI", "495828uoxSeC", "7585000FYDnPL"];
  __STRING_ARRAY__ = function () {
    return _0x46493d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KfyztO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KfyztO, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
