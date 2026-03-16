'use strict';

function __DECODE_0__(RupBiR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 458;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RupBiR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("70428wLQVLQ") / 1 + parseInt("1090934Qyhmiy") / 2 + -parseInt("1777032nOiOLX") / 3 + -parseInt("1060580NBGLqL") / 4 * (parseInt("5xyZepj") / 5) + -parseInt("222cOIbvr") / 6 * (-parseInt("21182oLzcYq") / 7) + -parseInt("2288952yFPmhx") / 8 + parseInt("153YrrzpW") / 9 * (parseInt("614890FwdWrS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 488706);
function __STRING_ARRAY__() {
  const _0x1c9601 = ["614890FwdWrS", "5xyZepj", "First", "shift", "222cOIbvr", "readFileSync", "Second", "153YrrzpW", "utf8", "trim", "1090934Qyhmiy", "map", "70428wLQVLQ", "1060580NBGLqL", "2288952yFPmhx", "21182oLzcYq", "log", "tbd", "1777032nOiOLX"];
  __STRING_ARRAY__ = function () {
    return _0x1c9601;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  input = input["trim"]().split(/\s+/)["map"](x => x - 0);
  const N = input["shift"]();
  const K = input["shift"]();
  const A = input;
  const dp = new Array(K + 2).fill("tbd");
  dp[K + 1] = true;
  for (let i = K + 1; i >= 0; i--) {
    if (dp[i]) {
      if (dp[i - 1] === true) {
        i--;
        continue;
      }
    }
    for (let j = 1; j <= A[0]; j++) {
      if (i - j >= 0) {
        if (dp[i - j] === "tbd") {
          dp[i - j] = false;
        }
      }
    }
    if (!dp[i]) {
      for (let a = 0; a < N; a++) {
        if (i - A[a] >= 0) {
          dp[i - A[a]] = true;
        }
      }
    }
  }
  if (dp[0]) {
    console["log"]("First");
  } else {
    console.log("Second");
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
