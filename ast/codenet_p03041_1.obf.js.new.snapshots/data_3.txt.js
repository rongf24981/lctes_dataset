'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1126086WuEFpX") / 1 + parseInt("2337336BXVDtr") / 2 + -parseInt("3056334boWGMG") / 3 * (parseInt("4txuBwo") / 4) + parseInt("15aloWKw") / 5 * (-parseInt("1155318ffCynt") / 6) + parseInt("3128125IFZKdF") / 7 + -parseInt("6523528MveDss") / 8 * (parseInt("9kZZrla") / 9) + parseInt("3954070fPdMsF") / 10 * (parseInt("11GCBZyl") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 725158);
function __STRING_ARRAY__() {
  const _0xbb3185 = ["utf8", "map", "3056334boWGMG", "9kZZrla", "2337336BXVDtr", "/dev/stdin", "6523528MveDss", "3954070fPdMsF", "readFileSync", "split", "log", "4txuBwo", "1155318ffCynt", "15aloWKw", "3128125IFZKdF", "join", "1126086WuEFpX", "11GCBZyl", "trim"];
  __STRING_ARRAY__ = function () {
    return _0xbb3185;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  let tmp = input["split"]("\n");
  let Num = tmp[0]["split"](" ").map(Number)[0];
  let Kji = tmp[0]["split"](" ")["map"](Number)[1];
  let Str = tmp[1]["trim"]();
  let Change = Str[Kji - 1];
  switch (Change) {
    case "A":
      Change = "a";
      break;
    case "B":
      Change = "b";
      break;
    case "C":
      Change = "c";
      break;
  }
  let StrArr = Str["split"]("");
  StrArr[Kji - 1] = Change;
  Str = StrArr["join"]("");
  console["log"](Str);
};
function __DECODE_0__(XhaSJq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 208;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XhaSJq, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
