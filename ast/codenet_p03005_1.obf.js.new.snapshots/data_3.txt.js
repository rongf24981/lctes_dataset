'use strict';

function __STRING_ARRAY__() {
  const _0x4627c7 = ["log", "31218836yFpmqn", "9MXYfnD", "split", "3Olitcy", "readFileSync", "7360816fGTHwc", "5483725TiAfcu", "trim", "14021rsJZiT", "17432650dBPFsL", "492124aTzDhG", "4rGSXVJ", "/dev/stdin", "4632eBEjrq", "2707600oFRKLl"];
  __STRING_ARRAY__ = function () {
    return _0x4627c7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(vPmwrR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 483;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vPmwrR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("4rGSXVJ") / 1 * (-parseInt("492124aTzDhG") / 2) + -parseInt("3Olitcy") / 3 * (parseInt("2707600oFRKLl") / 4) + parseInt("5483725TiAfcu") / 5 + -parseInt("4632eBEjrq") / 6 * (-parseInt("14021rsJZiT") / 7) + -parseInt("7360816fGTHwc") / 8 + parseInt("9MXYfnD") / 9 * (parseInt("17432650dBPFsL") / 10) + -parseInt("31218836yFpmqn") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 935496);
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0].split(" ")[0]);
  const K = parseInt(arg[0]["split"](" ")[1]);
  console["log"](K === 1 ? 0 : N - K);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
