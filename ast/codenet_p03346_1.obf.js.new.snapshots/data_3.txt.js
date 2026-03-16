(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("143263pbyQiZ") / 1 * (parseInt("4XVMUzA") / 2) + parseInt("12759qkTQmG") / 3 * (-parseInt("92rdVJTj") / 4) + -parseInt("305910vfiJdD") / 5 + parseInt("4482LTrbvD") / 6 * (-parseInt("567YJJWUX") / 7) + parseInt("2162264ORBYnG") / 8 + parseInt("126369JoOclS") / 9 + parseInt("3702530tHFmNP") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 148543);
function __DECODE_0__(wsLGNO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 154;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wsLGNO, key);
}
function __STRING_ARRAY__() {
  const _0x59d47f = ["4482LTrbvD", "readFileSync", "2162264ORBYnG", "log", "utf8", "4XVMUzA", "3702530tHFmNP", "126369JoOclS", "567YJJWUX", "92rdVJTj", "143263pbyQiZ", "fill", "12759qkTQmG", "/dev/stdin", "305910vfiJdD", "map"];
  __STRING_ARRAY__ = function () {
    return _0x59d47f;
  };
  return __STRING_ARRAY__();
}
console["log"]((args => {
  const [N, ...P] = args.trim().split("\n")["map"](v => v | 0);
  const dp = Array(N)["fill"](0);
  for (let i = 0; i < N; i++) {
    dp[P[i] + 1] = dp[P[i]] + 1;
  }
  return "" + (N - dp.reduce((a, b) => a > b ? a : b, 0));
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
