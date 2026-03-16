'use strict';

function __DECODE_0__(peUPNS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 325;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(peUPNS, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("23771ncDpQv") / 1 * (-parseInt("4DvdTjt") / 2) + parseInt("123aKqBuM") / 3 * (-parseInt("4756jLfhgo") / 4) + parseInt("311290uYPtDb") / 5 + -parseInt("6FasNBI") / 6 * (parseInt("1380211LrKUpN") / 7) + parseInt("1419560LhjrlJ") / 8 + -parseInt("147240rKZjtY") / 9 + parseInt("270MSjAwJ") / 10 * (parseInt("35189aMYBZo") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 111336);
function __STRING_ARRAY__() {
  const _0x3175e5 = ["4756jLfhgo", "23771ncDpQv", "utf8", "1419560LhjrlJ", "35189aMYBZo", "311290uYPtDb", "123aKqBuM", "split", "147240rKZjtY", "1380211LrKUpN", "4DvdTjt", "270MSjAwJ", "readFileSync", "log", "6FasNBI"];
  __STRING_ARRAY__ = function () {
    return _0x3175e5;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const tmp = input["split"](" ");
  let A = parseInt(tmp[0], 10);
  let B = parseInt(tmp[1], 10);
  const K = tmp[2];
  for (let i = 0; i < K; i++) {
    if (i % 2 == 0) {
      if (A % 2 == 1) {
        A--;
      }
      B += A / 2;
      A /= 2;
    } else {
      if (B % 2 == 1) {
        B--;
      }
      A += B / 2;
      B /= 2;
    }
  }
  console["log"](A, B);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
