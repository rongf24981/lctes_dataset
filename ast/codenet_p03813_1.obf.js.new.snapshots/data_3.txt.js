'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1SbjsWa") / 1 * (-parseInt("912712zcBDaA") / 2) + parseInt("260127AefFkp") / 3 + -parseInt("4096752KvsGRw") / 4 + -parseInt("5tbYKzx") / 5 * (parseInt("3519462xbeBrP") / 6) + -parseInt("301FJlKLq") / 7 * (parseInt("139064JMoRKx") / 8) + parseInt("4411161uXvvRX") / 9 + parseInt("30658080fgOyip") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 828056);
function __DECODE_0__(CNfIQv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 284;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CNfIQv, key);
}
function __STRING_ARRAY__() {
  const _0x2f7be8 = ["301FJlKLq", "30658080fgOyip", "1SbjsWa", "912712zcBDaA", "4411161uXvvRX", "ARC", "4096752KvsGRw", "readFileSync", "139064JMoRKx", "5tbYKzx", "/dev/stdin", "3519462xbeBrP", "260127AefFkp", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x2f7be8;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const x = Number(s);
  const ans = x >= 1200 ? "ARC" : "ABC";
  console.log(ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
