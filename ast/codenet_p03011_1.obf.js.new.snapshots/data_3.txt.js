'use strict';

function __STRING_ARRAY__() {
  const _0x4151f3 = ["utf8", "max", "/dev/stdin", "1930272wOBdHg", "9237jQVctf", "232dtPYgx", "95190LyYXlh", "35OonPbV", "log", "split", "8472141wuiXvi", "11984126SJwmvN", "142311ZGyYIQ", "readFileSync", "13172384FMUHGF"];
  __STRING_ARRAY__ = function () {
    return _0x4151f3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("142311ZGyYIQ") / 1 + parseInt("232dtPYgx") / 2 * (-parseInt("9237jQVctf") / 3) + parseInt("1930272wOBdHg") / 4 + -parseInt("35OonPbV") / 5 * (-parseInt("95190LyYXlh") / 6) + -parseInt("11984126SJwmvN") / 7 + parseInt("13172384FMUHGF") / 8 + parseInt("8472141wuiXvi") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 970027);
function __DECODE_0__(EgFUxs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 479;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EgFUxs, key);
}
function Main(input) {
  const P = Number(input["split"]("\n")[0]["split"](" ")[0]);
  const Q = Number(input["split"]("\n")[0].split(" ")[1]);
  const R = Number(input.split("\n")[0]["split"](" ")[2]);
  const max = Math["max"](P, Q, R);
  console["log"](P + Q + R - max);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8").trim());
