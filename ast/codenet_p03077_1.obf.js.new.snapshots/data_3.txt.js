'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("108431GxnRuu") / 1 * (parseInt("22QPRmDx") / 2) + -parseInt("1221996yTjaES") / 3 + parseInt("2390420IlrkMb") / 4 + -parseInt("1593725yTcCgP") / 5 + parseInt("4001970chRtOb") / 6 + parseInt("2683366mSnJnf") / 7 * (-parseInt("32mnhVOA") / 8) + parseInt("26839503kIrfRM") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 794597);
function main(input) {
  const args = input["split"]("\n");
  const N = parseInt(args[0]);
  const A = parseInt(args[1]);
  const B = parseInt(args[2]);
  const C = parseInt(args[3]);
  const D = parseInt(args[4]);
  const E = parseInt(args[5]);
  const station = [A, B, C, D, E];
  let max_traf = Math.min(...station);
  console["log"](Math["ceil"](N / max_traf) + 4);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(QQlyss, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 212;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QQlyss, key);
}
function __STRING_ARRAY__() {
  const _0x24e0a8 = ["log", "readFileSync", "ceil", "2390420IlrkMb", "4001970chRtOb", "/dev/stdin", "22QPRmDx", "utf8", "26839503kIrfRM", "32mnhVOA", "2683366mSnJnf", "1221996yTjaES", "1593725yTcCgP", "split", "108431GxnRuu"];
  __STRING_ARRAY__ = function () {
    return _0x24e0a8;
  };
  return __STRING_ARRAY__();
}
