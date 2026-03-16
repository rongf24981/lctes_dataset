'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("40UCvFfA") / 1 * (parseInt("4122saHkhL") / 2) + parseInt("934077MhYkxl") / 3 + -parseInt("1056500GEinDN") / 4 * (parseInt("5ZDTeGK") / 5) + -parseInt("626988jIQNaO") / 6 + parseInt("1141eXgeUI") / 7 * (-parseInt("13784FPgxag") / 8) + -parseInt("1773441WzlXYJ") / 9 + parseInt("6112390VPAbZt") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 158517);
function __DECODE_0__(svxCzu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 143;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(svxCzu, key);
}
function __STRING_ARRAY__() {
  const _0x44a6a8 = ["5ZDTeGK", "trim", "slice", "934077MhYkxl", "4122saHkhL", "1141eXgeUI", "1773441WzlXYJ", "fill", "split", "40UCvFfA", "6112390VPAbZt", "1056500GEinDN", "log", "utf8", "626988jIQNaO", "readFileSync", "13784FPgxag"];
  __STRING_ARRAY__ = function () {
    return _0x44a6a8;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  const M = parseInt(arg[0]["split"](" ")[1]);
  const dangers = arg["slice"](1, M + 1);
  let answer = [...Array(N + 1)]["fill"](1);
  let broken = -1;
  let NG = false;
  for (let i in dangers) {
    if (broken + 1 === dangers[i]) {
      NG = true;
    }
    answer[dangers[i]] = 0;
    broken = dangers[i];
  }
  for (let i = 2; i <= N; i++) {
    answer[i] = answer[i] * (answer[i - 2] + answer[i - 1]) % 1000000007;
  }
  console["log"](answer[N]);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
