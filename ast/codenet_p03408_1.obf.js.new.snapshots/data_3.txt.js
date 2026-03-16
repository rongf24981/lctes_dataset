'use strict';

function __DECODE_0__(NKGUzM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 144;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NKGUzM, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1440051HMuZrh") / 1 + -parseInt("3028704glLiTE") / 2 + -parseInt("409515ETtFEU") / 3 * (-parseInt("24mOlPKl") / 4) + -parseInt("15ByFQap") / 5 * (-parseInt("2696010TXXWxf") / 6) + -parseInt("11474925lHfcUE") / 7 + -parseInt("1970856VMAiVH") / 8 + parseInt("66159NXufZv") / 9 * (parseInt("1000zjrWwI") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 942202);
function Main(input) {
  const params = input["trim"]()["split"]("\n");
  const N = Number(params[0]["trim"]());
  const M = Number(params[N + 1]["trim"]());
  const blueCards = params["slice"](1, N + 1);
  const redCards = params.slice(N + 2);
  let cardCount = {};
  for (const card of blueCards) {
    const c = card["trim"]();
    if (cardCount["hasOwnProperty"](c)) {
      cardCount[c] = cardCount[c] + 1;
    } else {
      cardCount[c] = 1;
    }
  }
  for (const card of redCards) {
    const c = card.trim();
    if (cardCount["hasOwnProperty"](c)) {
      cardCount[c] = cardCount[c] - 1;
    } else {
      cardCount[c] = 1;
    }
  }
  let maxMoney = 0;
  for (const [key, money] of Object["entries"](cardCount)) {
    if (maxMoney < money) {
      maxMoney = money;
    }
  }
  console["log"](maxMoney);
}
function __STRING_ARRAY__() {
  const _0x4f3d71 = ["utf8", "1970856VMAiVH", "entries", "3028704glLiTE", "409515ETtFEU", "trim", "hasOwnProperty", "24mOlPKl", "split", "slice", "1440051HMuZrh", "log", "15ByFQap", "11474925lHfcUE", "/dev/stdin", "2696010TXXWxf", "1000zjrWwI", "66159NXufZv"];
  __STRING_ARRAY__ = function () {
    return _0x4f3d71;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
