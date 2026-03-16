function __STRING_ARRAY__() {
  const _0x2a1ae5 = ["push", "10fGajZd", "map", "1148516HQUOfz", "log", "readFileSync", "85dczBrl", "8xuMSmY", "585666onIXob", "split", "utf8", "2404846vweZET", "68322bzPRFd", "1027326xYwyxN", "/dev/stdin", "8609524DmaOeu", "abs", "152gdSZmB", "473494HjSvNx"];
  __STRING_ARRAY__ = function () {
    return _0x2a1ae5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1148516HQUOfz") / 1 + -parseInt("2404846vweZET") / 2 + -parseInt("1027326xYwyxN") / 3 * (-parseInt("8xuMSmY") / 4) + parseInt("85dczBrl") / 5 * (-parseInt("68322bzPRFd") / 6) + parseInt("473494HjSvNx") / 7 * (parseInt("152gdSZmB") / 8) + parseInt("585666onIXob") / 9 * (-parseInt("10fGajZd") / 10) + -parseInt("8609524DmaOeu") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 874838);
function Main(input) {
  input = input["split"]("\n");
  const [N, K] = input[0].split(" ")["map"](n => {
    return parseInt(n, 10);
  });
  const hn = input[1]["split"](" ")["map"](n => {
    return parseInt(n, 10);
  });
  const h_max = Math.pow(10, 9);
  console["log"](dp(N, K, hn, h_max));
}
function __DECODE_0__(KuAjoV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 224;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KuAjoV, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function dp(N, K, hn, h_max) {
  const dp = [];
  let dp_work = [];
  dp[0] = 0;
  for (var i = 1; i < N; i++) {
    dp.push(h_max);
    dp_work = [];
    dp_work["push"](dp[i]);
    for (var dp_work_i = 1; dp_work_i <= K; dp_work_i++) {
      if (i - dp_work_i < 0) {
        continue;
      }
      dp_work.push(dp[i - dp_work_i] + Math["abs"](hn[i - dp_work_i] - hn[i]));
    }
    dp[i] = Math.min(...dp_work);
  }
  return dp[N - 1];
}
