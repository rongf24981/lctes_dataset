(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1132194eKywPB") / 1 + parseInt("1133998kJZdTM") / 2 * (-parseInt("6TVGCfD") / 3) + -parseInt("2813324BQgoZV") / 4 * (parseInt("5rKxJtM") / 5) + parseInt("6004716nBTzsh") / 6 * (parseInt("7hDxNnt") / 7) + parseInt("12382536SXcFpi") / 8 + parseInt("3438126UgilHw") / 9 + -parseInt("14127500oiKJjX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 812732);
function __DECODE_0__(bBytNK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 215;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bBytNK, key);
}
function main(input) {
  const lines = input["split"]("\n");
  const NW = lines["shift"]()["split"](" ").map(x => parseInt(x));
  const N = NW[0];
  const W = NW[1];
  const items = lines["map"](line => line["split"](" ")["map"](x => parseInt(x)));
  dp = [];
  for (var i = 0; i < W + 1; i++) {
    dp["push"](Array(N + 1)["fill"](0));
  }
  var result = 0;
  for (var i = 0; i < N; i++) {
    for (var w = 0; w <= W; w++) {
      var weight = items[i][0];
      var value = items[i][1];
      if (weight <= w) {
        dp[w][i + 1] = Math["max"](dp[w][i], dp[w - weight][i] + value);
      } else {
        dp[w][i + 1] = dp[w][i];
      }
      if (dp[w][i + 1] > result) {
        result = dp[w][i + 1];
      }
    }
  }
  console["log"](result);
}
function __STRING_ARRAY__() {
  var _0x137d12 = ["1132194eKywPB", "5rKxJtM", "7hDxNnt", "1133998kJZdTM", "log", "fill", "max", "shift", "map", "3438126UgilHw", "/dev/stdin", "push", "6TVGCfD", "12382536SXcFpi", "14127500oiKJjX", "6004716nBTzsh", "utf8", "2813324BQgoZV", "split"];
  __STRING_ARRAY__ = function () {
    return _0x137d12;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
