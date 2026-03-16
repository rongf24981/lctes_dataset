'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("813460hbNqRw") / 1 + parseInt("1228ZXeyvt") / 2 * (-parseInt("3846EwKfYM") / 3) + parseInt("456488zTuBFH") / 4 * (parseInt("5GvzNOq") / 5) + parseInt("258MzbuKF") / 6 * (parseInt("120799IHAvvw") / 7) + -parseInt("789032KjqjUo") / 8 + parseInt("2918070NvFNMn") / 9 * (-parseInt("20gJIbwI") / 10) + parseInt("27000611yDGxeA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 963077);
function __STRING_ARRAY__() {
  const _0x3bbea5 = ["258MzbuKF", "trim", "1228ZXeyvt", "789032KjqjUo", "split", "813460hbNqRw", "5GvzNOq", "20gJIbwI", "/dev/stdin", "120799IHAvvw", "2918070NvFNMn", "27000611yDGxeA", "fill", "3846EwKfYM", "utf8", "456488zTuBFH", "readFileSync", "map"];
  __STRING_ARRAY__ = function () {
    return _0x3bbea5;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(tgTjNK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tgTjNK, key);
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  const W = parseInt(arg[0].split(" ")[1]);
  const wv = arg.slice(1, N + 1)["map"](n => n.split(" ")["map"](l => parseInt(l)));
  let dp = [...Array(N + 1)].map(n => [...Array(W + 1)]["fill"](0));
  let answer = 0;
  for (let i = 1; i < N + 1; i++) {
    const w = wv[i - 1][0];
    const v = wv[i - 1][1];
    for (let j = 0; j < W + 1; j++) {
      if (w > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], v + dp[i - 1][j - w]);
      }
      if (dp[i][j] > answer) {
        answer = dp[i][j];
      }
    }
  }
  console.log(answer);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
