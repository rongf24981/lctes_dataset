'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("38807ZtIdsi") / 1 * (-parseInt("6JVZILK") / 2) + parseInt("48018LTQtPv") / 3 * (parseInt("4DTVhGZ") / 4) + -parseInt("590ZBtQOK") / 5 * (parseInt("9498sSuvue") / 6) + parseInt("7hiHwWs") / 7 * (-parseInt("1264840cAYgQo") / 8) + parseInt("597402eZWqhP") / 9 + -parseInt("1480matNlo") / 10 * (-parseInt("110xFsYOc") / 11) + parseInt("5805780rkFHYA") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 106359);
function __STRING_ARRAY__() {
  const _0x4c29bb = ["590ZBtQOK", "1264840cAYgQo", "YES", "log", "split", "48018LTQtPv", "/dev/stdin", "7hiHwWs", "5805780rkFHYA", "38807ZtIdsi", "6JVZILK", "110xFsYOc", "597402eZWqhP", "4DTVhGZ", "readFileSync", "9498sSuvue", "1480matNlo", "map"];
  __STRING_ARRAY__ = function () {
    return _0x4c29bb;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  let Nums = arg.split("\n")[0]["split"](" ")["map"](n => Number(n));
  let A = Nums[0];
  let B = Nums[1];
  let C = Nums[2];
  let ans = "NO";
  for (let i = 1; i <= B; i++) {
    if (A * i % B == C) {
      ans = "YES";
    }
  }
  console["log"](ans);
};
function __DECODE_0__(JoHekw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 191;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JoHekw, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
