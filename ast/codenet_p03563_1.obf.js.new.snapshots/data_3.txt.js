'use strict';

function __DECODE_0__(dRnQHL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 224;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dRnQHL, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("194585MSgWtg") / 1 * (parseInt("2PElJtC") / 2) + parseInt("322878SyFKup") / 3 + parseInt("790636YHYjep") / 4 + -parseInt("339095QYkNpa") / 5 * (parseInt("12YOymSJ") / 6) + parseInt("308NYwXLr") / 7 * (parseInt("10456XmVaUx") / 8) + parseInt("67986FzrNJz") / 9 + -parseInt("128230fCfUpS") / 10 * (parseInt("275OarFai") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 108719);
function __STRING_ARRAY__() {
  const _0x40ffd7 = ["readFileSync", "10456XmVaUx", "194585MSgWtg", "2PElJtC", "128230fCfUpS", "/dev/stdin", "339095QYkNpa", "275OarFai", "308NYwXLr", "utf8", "12YOymSJ", "split", "322878SyFKup", "790636YHYjep", "67986FzrNJz"];
  __STRING_ARRAY__ = function () {
    return _0x40ffd7;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  s = s["split"]("\n");
  const r = Number(s[0]);
  const g = Number(s[1]);
  let ans = g + (g - r);
  console.log(ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
