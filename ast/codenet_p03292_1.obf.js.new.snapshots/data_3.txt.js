'use strict';

function __DECODE_0__(uCHpgm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 271;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uCHpgm, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1jFhyjq") / 1 * (parseInt("258890pyUiEa") / 2) + parseInt("3njgEiH") / 3 * (parseInt("1417268zDUIxn") / 4) + parseInt("123905iczCmj") / 5 + parseInt("11297136KqwjVr") / 6 + parseInt("765247XvbrVR") / 7 * (-parseInt("104iYkJXm") / 8) + -parseInt("13026465vshXyN") / 9 + -parseInt("10740fAwLSO") / 10 * (-parseInt("14542FYSTJu") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 942669);
function main(s) {
  const nums = s["split"]("\n")[0].split(" ")["map"](n => Number(n));
  const ans = Math.max(...nums) - Math["min"](...nums);
  console["log"](ans);
}
function __STRING_ARRAY__() {
  const _0x4d8f12 = ["min", "1417268zDUIxn", "123905iczCmj", "11297136KqwjVr", "14542FYSTJu", "map", "3njgEiH", "1jFhyjq", "13026465vshXyN", "104iYkJXm", "split", "readFileSync", "10740fAwLSO", "log", "258890pyUiEa", "765247XvbrVR"];
  __STRING_ARRAY__ = function () {
    return _0x4d8f12;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
