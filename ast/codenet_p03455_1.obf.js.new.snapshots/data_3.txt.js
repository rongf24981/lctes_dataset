'use strict';

function __DECODE_0__(SbUdPT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 160;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SbUdPT, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2QtRZmW") / 1 * (-parseInt("486474BvaxwY") / 2) + -parseInt("874803DGwowd") / 3 + parseInt("42308DbLicJ") / 4 * (-parseInt("65xdVSub") / 5) + parseInt("36bgwFbH") / 6 * (parseInt("335041iRpkpg") / 7) + -parseInt("392RURSHN") / 8 * (parseInt("268578nBAFJu") / 9) + -parseInt("120hAWBOk") / 10 * (-parseInt("585937bNPgzC") / 11) + parseInt("15278904ZuQzrw") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 794738);
function main(input) {
  input = input["trim"]()["split"](" ").map(Number);
  const A = input[0];
  const B = input[1];
  const ans = A % 2 ^ B % 2 ? "Even" : "Odd";
  console["log"](ans);
}
function __STRING_ARRAY__() {
  const _0x5aabaf = ["2QtRZmW", "486474BvaxwY", "/dev/stdin", "Odd", "Even", "split", "36bgwFbH", "268578nBAFJu", "335041iRpkpg", "392RURSHN", "42308DbLicJ", "874803DGwowd", "log", "trim", "readFileSync", "65xdVSub", "585937bNPgzC", "15278904ZuQzrw", "120hAWBOk"];
  __STRING_ARRAY__ = function () {
    return _0x5aabaf;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
