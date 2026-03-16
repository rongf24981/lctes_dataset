'use strict';

function __DECODE_0__(WfWZjl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 211;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WfWZjl, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1378671DPsstC") / 1 + -parseInt("999876elfgGs") / 2 + parseInt("597bRVwGr") / 3 * (-parseInt("32932vFIebi") / 4) + parseInt("1632235ylQAxh") / 5 + parseInt("3522ZwjdxY") / 6 * (-parseInt("4459EkfDyQ") / 7) + parseInt("2852952CXGVbh") / 8 + -parseInt("18749961kYUiCu") / 9 * (-parseInt("20WyZbNs") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 958829);
function __STRING_ARRAY__() {
  const _0x195718 = ["4459EkfDyQ", "split", "597bRVwGr", "readFileSync", "32932vFIebi", "999876elfgGs", "1378671DPsstC", "/dev/stdin", "18749961kYUiCu", "log", "20WyZbNs", "Yes", "3522ZwjdxY", "2852952CXGVbh", "1632235ylQAxh", "utf8", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x195718;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const S = arg[0].split("");
  let previous = null;
  for (let i in S) {
    if (previous === "A" && S[i] === "C") {
      console["log"]("Yes");
      return;
    }
    previous = S[i];
  }
  console.log("No");
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
