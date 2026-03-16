'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("623217iYIrrP") / 1 + -parseInt("4dRWGJa") / 2 * (-parseInt("834744mGmhZL") / 3) + -parseInt("3098968GsZskh") / 4 * (-parseInt("5CwWVAh") / 5) + -parseInt("2978412WAZKoN") / 6 + parseInt("4085739dpFaZW") / 7 + -parseInt("4833768fRCGib") / 8 + -parseInt("8886447LlyDSx") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 450126);
function __DECODE_0__(YkRQWx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 398;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YkRQWx, key);
}
function Main(input) {
  const tape = input.split("\n")[0]["split"]("");
  const result = [];
  for (const v of tape) {
    if (v === "B") {
      result["pop"]();
    } else {
      result["push"](v);
    }
  }
  console["log"](result.join(""));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x1befca = ["4dRWGJa", "5CwWVAh", "pop", "utf8", "4833768fRCGib", "834744mGmhZL", "3098968GsZskh", "2978412WAZKoN", "4085739dpFaZW", "log", "8886447LlyDSx", "push", "split", "623217iYIrrP", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x1befca;
  };
  return __STRING_ARRAY__();
}
