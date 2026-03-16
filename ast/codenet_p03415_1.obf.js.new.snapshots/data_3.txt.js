'use strict';

function __STRING_ARRAY__() {
  const _0x2526f7 = ["6732632cfKdpS", "12170QxnQoP", "utf8", "2871522SLLgXH", "log", "544986SrXfBm", "/dev/stdin", "split", "5391855NCyMMs", "288rEXYMj", "readFileSync", "map", "1989916ZcZYfz", "84NyuVDl", "40TRcqLo", "698501qdxDwZ"];
  __STRING_ARRAY__ = function () {
    return _0x2526f7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ECeZHt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 403;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ECeZHt, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("698501qdxDwZ") / 1 + -parseInt("12170QxnQoP") / 2 * (parseInt("288rEXYMj") / 3) + parseInt("1989916ZcZYfz") / 4 + -parseInt("5391855NCyMMs") / 5 + -parseInt("544986SrXfBm") / 6 * (parseInt("84NyuVDl") / 7) + parseInt("6732632cfKdpS") / 8 + parseInt("2871522SLLgXH") / 9 * (parseInt("40TRcqLo") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 561288);
function main(arg) {
  const letters = arg.split("\n")["map"](n => n["split"](""));
  console["log"](letters[0][0] + letters[1][1] + letters[2][2]);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
