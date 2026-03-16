function __STRING_ARRAY__() {
  const _0x35b25c = ["set", "884310LsFFAP", "12821OeprQO", "29534936pFbcDU", "/dev/stdin", "808059DaVGsh", "1766840lRxDyY", "get", "3571926bAeRlS", "readFileSync", "has", "trim", "730150uKIPdD", "log", "min", "split", "utf8", "250MfbrDr"];
  __STRING_ARRAY__ = function () {
    return _0x35b25c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("12821OeprQO") / 1 * (parseInt("250MfbrDr") / 2) + -parseInt("808059DaVGsh") / 3 + -parseInt("1766840lRxDyY") / 4 + parseInt("730150uKIPdD") / 5 + -parseInt("3571926bAeRlS") / 6 + -parseInt("884310LsFFAP") / 7 + parseInt("29534936pFbcDU") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 802558);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const list = input["trim"]()["split"]("\n");
let [n, m] = list[0]["split"](" ");
n = Number(n);
m = Number(m);
let cm = list[1]["trim"]().split(" ");
cm = cm.map(c => Number(c));
function __DECODE_0__(mMlIPd, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 307;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mMlIPd, key);
}
const dp = new Map();
for (let i = 0; i < m; i++) {
  dp["set"](cm[i], 1);
}
const max = n + 1;
for (let i = 0; i <= n; i++) {
  if (dp["has"](i)) {
    continue;
  }
  let min = max;
  for (let j = 0; j < m; j++) {
    const target = i - cm[j];
    if (target < 0 || !dp.has(target)) {
      continue;
    }
    const count = dp.get(target);
    min = Math["min"](count, min);
  }
  if (min < max) {
    dp["set"](i, min + 1);
  }
}
console["log"](dp["get"](n));
