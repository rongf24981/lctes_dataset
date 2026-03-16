'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("208486LQAYYF") / 1 * (parseInt("2BzpfmX") / 2) + parseInt("721947WkFduI") / 3 * (-parseInt("4oEDrig") / 4) + parseInt("1871120RYzQDx") / 5 * (parseInt("6siqLXj") / 6) + parseInt("41377ePvqII") / 7 * (parseInt("920bzPwwK") / 8) + -parseInt("2124189PRRGuW") / 9 * (parseInt("10jBEnSj") / 10) + -parseInt("11rYdlvs") / 11 * (-parseInt("7354008kUuSnl") / 12) + -parseInt("12384047FViPDG") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 446020);
function __STRING_ARRAY__() {
  const _0x19ece0 = ["920bzPwwK", "4oEDrig", "208486LQAYYF", "utf8", "2BzpfmX", "721947WkFduI", "split", "41377ePvqII", "11rYdlvs", "7354008kUuSnl", "6siqLXj", "trim", "10jBEnSj", "2124189PRRGuW", "length", "1871120RYzQDx", "log", "12384047FViPDG", "fill"];
  __STRING_ARRAY__ = function () {
    return _0x19ece0;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0]);
  const cnt = [];
  for (let i = 0; i < 10; i++) {
    cnt.push(new Array(10)["fill"](0));
  }
  for (let i = 1; i <= N; i++) {
    const S = String(i);
    const head = parseInt(S[0]);
    const tail = parseInt(S[S["length"] - 1]);
    cnt[head][tail]++;
  }
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      answer += cnt[i][j] * cnt[j][i];
    }
  }
  console["log"](answer);
};
function __DECODE_0__(entGUS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 111;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(entGUS, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
