'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("631307pKcxgA") / 1 * (-parseInt("4uzunCe") / 2) + parseInt("13746NJOkLv") / 3 * (-parseInt("808RxkqSj") / 4) + -parseInt("2230460hrkPgy") / 5 + -parseInt("103182txDzwf") / 6 * (-parseInt("511otTSyw") / 7) + -parseInt("3688vNSXTz") / 8 * (-parseInt("7848MmyvBN") / 9) + -parseInt("17803310DkWsBJ") / 10 + -parseInt("44LWctam") / 11 * (-parseInt("11130036syhlvX") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 952784);
function __DECODE_0__(eQzdYd, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eQzdYd, key);
}
const INF = 900719925474099;
function mapint(temp) {
  return temp["split"](" ")["map"](v => parseInt(v));
}
function Main(input) {
  let temp = input.trim()["split"]("\n");
  let n = parseInt(temp[0]);
  let w = mapint(temp[1]);
  let s1 = w[0];
  let s2 = 0;
  for (let i = 1; i < n; i++) {
    s2 += w[i];
  }
  let sa = Math["abs"](s1 - s2);
  let sa2;
  for (let i = 1; i < n; i++) {
    s1 += w[i];
    s2 -= w[i];
    sa = Math.min(sa, Math.abs(s1 - s2));
  }
  console["log"](sa);
}
function __STRING_ARRAY__() {
  const _0x5353f5 = ["split", "17803310DkWsBJ", "log", "808RxkqSj", "abs", "map", "4uzunCe", "3688vNSXTz", "44LWctam", "631307pKcxgA", "103182txDzwf", "2230460hrkPgy", "utf8", "13746NJOkLv", "7848MmyvBN", "11130036syhlvX", "511otTSyw"];
  __STRING_ARRAY__ = function () {
    return _0x5353f5;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
