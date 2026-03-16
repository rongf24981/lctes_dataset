'use strict';

function __STRING_ARRAY__() {
  const _0x3fd7bb = ["91449KvUhoa", "20418mvXbGo", "utf8", "split", "59NMkzUW", "map", "3187162fdvpCw", "/dev/stdin", "600114mRSMoJ", "930rOTWQd", "48PnnMub", "63wBHHFC", "readFileSync", "log", "11192JedyfQ", "5155738JlcInz", "13672744edkwih", "55rRdoEq"];
  __STRING_ARRAY__ = function () {
    return _0x3fd7bb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("59NMkzUW") / 1 * (-parseInt("20418mvXbGo") / 2) + parseInt("63wBHHFC") / 3 * (parseInt("11192JedyfQ") / 4) + parseInt("55rRdoEq") / 5 * (parseInt("600114mRSMoJ") / 6) + parseInt("5155738JlcInz") / 7 + parseInt("13672744edkwih") / 8 + -parseInt("91449KvUhoa") / 9 * (parseInt("930rOTWQd") / 10) + -parseInt("3187162fdvpCw") / 11 * (parseInt("48PnnMub") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 898322);
function main(input) {
  input = input["split"](" ")["map"](v => ~~v);
  const n = input[0];
  const m = input[1];
  const limit = 1000000007;
  if (Math.abs(n - m) >= 2) {
    console["log"](0);
    return;
  }
  let nn = 1;
  for (let i = 2; i <= n; i++) {
    nn *= i;
    if (nn >= limit) {
      nn = nn % limit;
    }
  }
  for (let i = 2; i <= m; i++) {
    nn *= i;
    if (nn >= limit) {
      nn = nn % limit;
    }
  }
  let tmp = nn % limit;
  if (n == m) {
    tmp = tmp * 2;
  }
  const ans = tmp % limit;
  console["log"](ans);
}
function __DECODE_0__(Srrepq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 480;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Srrepq, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
