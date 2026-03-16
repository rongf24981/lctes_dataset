function __STRING_ARRAY__() {
  const _0x5bbf3f = ["map", "378554MskntG", "split", "/dev/stdin", "12HMEqwH", "20TYEgAQ", "26109NuEyTy", "1311496NYvfGy", "28celKBO", "724716BHqxoA", "log", "slice", "62674byLgTW", "63Tyufzn", "964734rTVjAs", "trim", "10VVYuIU", "446634ruwyff", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x5bbf3f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("12HMEqwH") / 1 * (-parseInt("62674byLgTW") / 2) + -parseInt("26109NuEyTy") / 3 * (parseInt("28celKBO") / 4) + -parseInt("10VVYuIU") / 5 * (parseInt("964734rTVjAs") / 6) + parseInt("63Tyufzn") / 7 * (parseInt("1311496NYvfGy") / 8) + -parseInt("446634ruwyff") / 9 + -parseInt("20TYEgAQ") / 10 * (-parseInt("378554MskntG") / 11) + parseInt("724716BHqxoA") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 796485);
function __DECODE_0__(YOBhec, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 107;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YOBhec, key);
}
console["log"]((args => {
  const [[H, W], ...tmp] = args["trim"]()["split"]`\n`.map(r => r.split` `["map"](v => v | 0));
  const A = tmp.slice(10);
  const dp = tmp["slice"](0, 10);
  for (let k = 0; k < 10; k++) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }
  let cost = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (A[i][j] === -1 || A[i][j] === 1) {
        continue;
      }
      cost += dp[A[i][j]][1];
    }
  }
  return "" + cost;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
