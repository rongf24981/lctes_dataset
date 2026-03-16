'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("667FGYDSm") / 1 * (-parseInt("2866sHwteU") / 2) + parseInt("60kDYNum") / 3 * (parseInt("171620UKKKOx") / 4) + parseInt("2829010eUVlHo") / 5 + parseInt("4917078StnpLo") / 6 + -parseInt("4504920kZylju") / 7 + parseInt("88bvKkRd") / 8 * (-parseInt("434529YDVyoI") / 9) + parseInt("5002550LtpiPW") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 613208);
function __DECODE_0__(tPzLWh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 258;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tPzLWh, key);
}
function __STRING_ARRAY__() {
  const _0x30cd98 = ["88bvKkRd", "60kDYNum", "log", "utf8", "2866sHwteU", "4504920kZylju", "split", "trim", "667FGYDSm", "/dev/stdin", "2829010eUVlHo", "5002550LtpiPW", "434529YDVyoI", "171620UKKKOx", "4917078StnpLo"];
  __STRING_ARRAY__ = function () {
    return _0x30cd98;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const L = parseInt(arg[0]["split"](" ")[0]);
  const R = parseInt(arg[0]["split"](" ")[1]);
  const d = parseInt(arg[0]["split"](" ")[2]);
  let answer = 0;
  for (let i = L; i <= R; i++) {
    if (i % d === 0) {
      answer++;
    }
  }
  console["log"](answer);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
