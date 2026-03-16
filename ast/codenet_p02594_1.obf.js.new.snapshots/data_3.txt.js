'use strict';

function __DECODE_0__(cvLFXV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 351;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cvLFXV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("520075MguEXZ") / 1 + -parseInt("1747782BmZVBF") / 2 + -parseInt("975TJuSqB") / 3 * (parseInt("10052KMxAIz") / 4) + -parseInt("10895crInHf") / 5 * (-parseInt("1158qFaTto") / 6) + parseInt("4733071Nzwnkx") / 7 + -parseInt("3137592kVtAUR") / 8 + parseInt("324EsMyYE") / 9 * (parseInt("265870PWPkMt") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 491092);
function __STRING_ARRAY__() {
  const _0x29fcbd = ["Yes", "split", "4733071Nzwnkx", "1747782BmZVBF", "265870PWPkMt", "utf8", "1158qFaTto", "3137592kVtAUR", "/dev/stdin", "log", "520075MguEXZ", "324EsMyYE", "10895crInHf", "10052KMxAIz", "975TJuSqB"];
  __STRING_ARRAY__ = function () {
    return _0x29fcbd;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg.trim()["split"]("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  console["log"](N >= 30 ? "Yes" : "No");
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
