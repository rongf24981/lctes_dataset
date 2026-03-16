'use strict';

function __DECODE_0__(ansjjx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 294;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ansjjx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("154FFOwFl") / 1 * (-parseInt("10412IqTNkH") / 2) + parseInt("1452618NtEAIw") / 3 + parseInt("264944lOJOcP") / 4 + -parseInt("2758715DsaTIF") / 5 * (-parseInt("6Hkpyur") / 6) + parseInt("2758BVXRzB") / 7 * (parseInt("15528kVZQxd") / 8) + parseInt("5205051IkvhXB") / 9 + -parseInt("10yMPfoa") / 10 * (parseInt("31157599MiAOCE") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 414493);
let input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const Nums = input["split"]("\n");
function __STRING_ARRAY__() {
  const _0x4a0324 = ["10yMPfoa", "readFileSync", "log", "2758715DsaTIF", "31157599MiAOCE", "/dev/stdin", "2758BVXRzB", "15528kVZQxd", "1452618NtEAIw", "split", "utf8", "154FFOwFl", "5205051IkvhXB", "264944lOJOcP", "10412IqTNkH", "6Hkpyur"];
  __STRING_ARRAY__ = function () {
    return _0x4a0324;
  };
  return __STRING_ARRAY__();
}
const S = Nums[0]["split"]("");
const T = Nums[1]["split"]("");
let ans = 0;
S.forEach((x, i) => {
  if (x == T[i]) {
    ans++;
  }
});
console["log"](ans);
