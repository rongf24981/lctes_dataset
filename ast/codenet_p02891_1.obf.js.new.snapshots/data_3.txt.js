'use strict';

function __STRING_ARRAY__() {
  const _0x59943c = ["100vZatGX", "41739ATcbQC", "1602570KURKjc", "68488HKSSKs", "88195UvFcrE", "length", "6111917hZsFgF", "utf8", "floor", "log", "8dbcxia", "split", "10735389VYaGmy", "trim", "35qKHBBD", "9883140JKJlQo"];
  __STRING_ARRAY__ = function () {
    return _0x59943c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("35qKHBBD") / 1 * (-parseInt("68488HKSSKs") / 2) + parseInt("41739ATcbQC") / 3 + parseInt("100vZatGX") / 4 * (parseInt("88195UvFcrE") / 5) + parseInt("1602570KURKjc") / 6 + parseInt("6111917hZsFgF") / 7 + parseInt("8dbcxia") / 8 * (parseInt("10735389VYaGmy") / 9) + -parseInt("9883140JKJlQo") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 601081);
function __DECODE_0__(yBfOim, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 283;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yBfOim, key);
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const S = arg[0]["split"]("");
  const K = parseInt(arg[1]);
  let streakS = 0;
  for (let i = 1; i < S["length"]; i++) {
    if (S[i] === S[i - 1]) {
      streakS++;
      S[i] = "@";
    }
  }
  console["log"](S["length"] === 1 ? Math["floor"](K / 2) : streakS * K);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
