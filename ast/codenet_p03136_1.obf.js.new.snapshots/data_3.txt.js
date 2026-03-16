'use strict';

function __DECODE_0__(ENFFox, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 123;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ENFFox, key);
}
function __STRING_ARRAY__() {
  const _0x3b0f82 = ["415WAzCqU", "6821880zTzCvC", "1302147TToumt", "map", "507791UasigK", "Yes", "1366804URTGgY", "trim", "readFileSync", "split", "34674DzeAXE", "1754746yprrhU", "log", "utf8", "9478368oAFaVX", "16hCzoLN"];
  __STRING_ARRAY__ = function () {
    return _0x3b0f82;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("507791UasigK") / 1 + parseInt("1366804URTGgY") / 2 + -parseInt("1302147TToumt") / 3 + -parseInt("6821880zTzCvC") / 4 + -parseInt("415WAzCqU") / 5 * (parseInt("34674DzeAXE") / 6) + parseInt("1754746yprrhU") / 7 + parseInt("16hCzoLN") / 8 * (parseInt("9478368oAFaVX") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 928999);
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  let L = arg[1].split(" ")["map"](n => parseInt(n)).sort((a, b) => b - a);
  const longest = L.shift();
  const sum = L.reduce((m, n) => m + n);
  console["log"](longest < sum ? "Yes" : "No");
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
