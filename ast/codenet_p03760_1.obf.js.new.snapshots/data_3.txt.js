'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("94QQScJR") / 1 * (-parseInt("3898dDBrma") / 2) + -parseInt("279498faFIVv") / 3 + parseInt("306512zlXTBd") / 4 + parseInt("1313245QhtHwb") / 5 * (parseInt("6PKpDLi") / 6) + -parseInt("857836wOTaPy") / 7 * (parseInt("16VONexQ") / 8) + -parseInt("444222IWZgkk") / 9 + parseInt("3847960FQzRxQ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 153247);
function __STRING_ARRAY__() {
  const _0x342f8d = ["/dev/stdin", "3847960FQzRxQ", "split", "306512zlXTBd", "readFileSync", "279498faFIVv", "log", "94QQScJR", "444222IWZgkk", "857836wOTaPy", "1313245QhtHwb", "6PKpDLi", "utf8", "3898dDBrma", "16VONexQ"];
  __STRING_ARRAY__ = function () {
    return _0x342f8d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jmaPty, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 497;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jmaPty, key);
}
function main(s) {
  s = s["split"]("\n");
  const o = s[0]["split"]("");
  const e = s[1].split("");
  let ans = "";
  for (let i = 0; i < o.length + e.length; i++) {
    if (o[i]) {
      ans += o[i];
    }
    if (e[i]) {
      ans += e[i];
    }
  }
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
