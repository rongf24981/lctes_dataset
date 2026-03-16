function __DECODE_0__(OAMmyE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 496;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OAMmyE, key);
}
function __STRING_ARRAY__() {
  const _0xe5801 = ["max", "push", "fill", "4462434WLggfy", "readFileSync", "trim", "2991190KQJegF", "82zmCvvl", "7jMMrOP", "join", "log", "split", "1212715XkTXxU", "2093176BeQdtH", "1051560gpkrMl", "778456pUvGbG", "map", "utf8", "46533NaalwO", "18MLyzBU"];
  __STRING_ARRAY__ = function () {
    return _0xe5801;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("778456pUvGbG") / 1 + parseInt("82zmCvvl") / 2 * (parseInt("46533NaalwO") / 3) + parseInt("1051560gpkrMl") / 4 + -parseInt("1212715XkTXxU") / 5 + -parseInt("4462434WLggfy") / 6 * (parseInt("7jMMrOP") / 7) + parseInt("2093176BeQdtH") / 8 * (-parseInt("18MLyzBU") / 9) + parseInt("2991190KQJegF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 466840);
console["log"](function (args) {
  const tmp = args["trim"]()["split"]("\n")["map"](r => r["split"](" ")["map"](v => v | 0));
  const N = tmp[0][0];
  const Q = tmp[N + 1][0];
  const V = [0];
  const W = [0];
  const v = [];
  const L = [];
  for (let i = 1; i <= N; i++) {
    V["push"](tmp[i][0]);
    W["push"](tmp[i][1]);
  }
  let Lmax = 0;
  for (let i = 1; i <= Q; i++) {
    v["push"](tmp[N + 1 + i][0]);
    L["push"](tmp[N + 1 + i][1]);
    if (L[i - 1] > Lmax) {
      Lmax = L[i - 1];
    }
  }
  const dp = [Array(Lmax + 1)["fill"](0)];
  for (let i = 1; i <= N; i++) {
    dp[i] = [];
    for (let w = 0; w <= Lmax; w++) {
      if (w >= W[i]) {
        dp[i][w] = Math["max"](dp[i >> 1][w - W[i]] + V[i], dp[i >> 1][w]);
      } else {
        dp[i][w] = dp[i >> 1][w];
      }
    }
  }
  const max = [];
  for (let i = 0; i < Q; i++) {
    max.push(dp[v[i]][L[i]]);
  }
  return max["join"]("\n");
}(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
