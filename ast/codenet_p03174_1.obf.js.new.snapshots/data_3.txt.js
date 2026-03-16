'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("339001tQbqhX") / 1 * (-parseInt("2IWPBXK") / 2) + -parseInt("434520WejZXo") / 3 + -parseInt("755348BALzly") / 4 * (parseInt("5FDkXwI") / 5) + -parseInt("6WgXgQs") / 6 * (-parseInt("1104110TKIyRP") / 7) + -parseInt("25352symKsO") / 8 * (-parseInt("144QgMrEf") / 9) + parseInt("2960nYFyQt") / 10 * (-parseInt("6666aLeFiV") / 11) + parseInt("2414184nEeaeS") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 235564);
function __DECODE_0__(rOckrX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 312;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rOckrX, key);
}
function Main(input) {
  input = input.trim().split(/\n/);
  const N = input["shift"]() - 0;
  const M = Math["pow"](2, N);
  const K = Math["pow"](10, 9) + 7;
  input = input["map"](str => str["split"](/\s+/)["map"](x => x === "1"));
  const Match = input;
  const dp = new Array(N)["fill"](0)["map"]((x, j) => new Object());
  dp[-1] = {
    0: 1
  };
  const p = new Array(N)["fill"](0)["map"]((x, i) => 1 << i);
  for (let i = -1; i < N - 1; i++) {
    Object["keys"](dp[i]).forEach(function (J) {
      J = J - 0;
      dp[i][J] %= K;
      for (let j = 0; j < N; j++) {
        if ((J & p[j]) > 0) {
          continue;
        }
        if (Match[i + 1][j]) {
          dp[i + 1][J + p[j]] = (dp[i + 1][J + p[j]] || 0) + dp[i][J];
        }
      }
    });
  }
  console["log"]((dp[N - 1][M - 1] || 0) % K);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x434c80 = ["log", "fill", "144QgMrEf", "339001tQbqhX", "434520WejZXo", "2414184nEeaeS", "map", "6WgXgQs", "utf8", "2960nYFyQt", "25352symKsO", "split", "/dev/stdin", "6666aLeFiV", "pow", "5FDkXwI", "755348BALzly", "2IWPBXK", "shift", "keys", "1104110TKIyRP"];
  __STRING_ARRAY__ = function () {
    return _0x434c80;
  };
  return __STRING_ARRAY__();
}
