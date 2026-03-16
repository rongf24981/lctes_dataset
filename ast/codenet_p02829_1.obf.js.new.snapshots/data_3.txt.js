'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1260203eNsUDj") / 1 + -parseInt("54654IdMMMp") / 2 * (parseInt("117BDJVkv") / 3) + -parseInt("2603060teRJBK") / 4 + parseInt("6066340UWfJMQ") / 5 + parseInt("987018PzkVaI") / 6 + -parseInt("316540rmtaeg") / 7 + parseInt("18419776mWNILo") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 658302);
function __DECODE_0__(rxkYvL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 491;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rxkYvL, key);
}
function main(input) {
  const args = input["split"]("\n");
  const num = args["map"](el => parseInt(el));
  const ans = [1, 2, 3];
  let out = ans["filter"](el => el !== num[0]);
  out = out.find(el => el !== num[1]);
  console["log"](out);
}
function __STRING_ARRAY__() {
  const _0x2b07c5 = ["18419776mWNILo", "316540rmtaeg", "readFileSync", "54654IdMMMp", "utf8", "filter", "1260203eNsUDj", "117BDJVkv", "6066340UWfJMQ", "/dev/stdin", "987018PzkVaI", "split", "log", "2603060teRJBK", "map"];
  __STRING_ARRAY__ = function () {
    return _0x2b07c5;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
