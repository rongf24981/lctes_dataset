'use strict';

function __STRING_ARRAY__() {
  const _0x5dad5a = ["160584ONFpVo", "map", "/dev/stdin", "6535290MLbvMI", "2JFTlnS", "31956GQCJIY", "split", "258aIMRSz", "1265520mnvQFT", "50489iYZJZo", "4153635TgBUCF", "15pqrxPW", "log", "56qINWri", "1892qStonp", "13196BBxNWo"];
  __STRING_ARRAY__ = function () {
    return _0x5dad5a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("50489iYZJZo") / 1 * (-parseInt("2JFTlnS") / 2) + parseInt("258aIMRSz") / 3 * (parseInt("13196BBxNWo") / 4) + -parseInt("15pqrxPW") / 5 * (-parseInt("1265520mnvQFT") / 6) + -parseInt("56qINWri") / 7 * (-parseInt("160584ONFpVo") / 8) + -parseInt("4153635TgBUCF") / 9 + -parseInt("6535290MLbvMI") / 10 + -parseInt("1892qStonp") / 11 * (-parseInt("31956GQCJIY") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 369561);
function __DECODE_0__(BalTYi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 272;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BalTYi, key);
}
function main(s) {
  const a = s["split"]("\n")[1]["split"](" ")["map"](n => Number(n));
  let ans = 0;
  for (let n of a) {
    while (n % 2 === 0) {
      n = n / 2;
      ans += 1;
    }
  }
  console["log"](ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
