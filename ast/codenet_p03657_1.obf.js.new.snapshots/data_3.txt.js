'use strict';

function __STRING_ARRAY__() {
  const _0x562c63 = ["3wLYYLc", "5401647wAYSZR", "186408KyHiiB", "183954fFypMK", "/dev/stdin", "21CwNxaG", "10451370qcpKjC", "utf8", "20djRJRK", "271994rExvaz", "Possible", "322505uQQZUQ", "log", "1758104DdaWRd", "split"];
  __STRING_ARRAY__ = function () {
    return _0x562c63;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("271994rExvaz") / 1 + -parseInt("183954fFypMK") / 2 * (-parseInt("3wLYYLc") / 3) + parseInt("20djRJRK") / 4 * (parseInt("322505uQQZUQ") / 5) + parseInt("186408KyHiiB") / 6 + -parseInt("21CwNxaG") / 7 * (-parseInt("1758104DdaWRd") / 8) + parseInt("5401647wAYSZR") / 9 + -parseInt("10451370qcpKjC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 387891);
function Main(input) {
  input = input["split"]("\n");
  const arr = input[0]["split"](" ");
  if (arr[0] % 3 === 0 || arr[1] % 3 === 0 || (arr[0] + arr[1]) % 3 === 0) {
    console["log"]("Possible");
  } else {
    console.log("Impossible");
  }
}
function __DECODE_0__(RtZBah, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 449;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RtZBah, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
