function __STRING_ARRAY__() {
  var _0x1a430d = ["log", "6oLqILH", "16505xrWUmY", "5TvmQQk", "5477124DQcFzH", "/dev/stdin", "1952570mlozbC", "6634705WGQQuJ", "153dvaklj", "utf8", "14HKwEyU", "getElementById", "readFileSync", "17144YMPHhW", "split", "26625698FtaGmS", "value", "1711304MJxUSj"];
  __STRING_ARRAY__ = function () {
    return _0x1a430d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("16505xrWUmY") / 1 * (parseInt("14HKwEyU") / 2) + -parseInt("6oLqILH") / 3 * (-parseInt("1711304MJxUSj") / 4) + -parseInt("5TvmQQk") / 5 * (-parseInt("5477124DQcFzH") / 6) + parseInt("6634705WGQQuJ") / 7 + -parseInt("17144YMPHhW") / 8 * (-parseInt("153dvaklj") / 9) + parseInt("1952570mlozbC") / 10 + -parseInt("26625698FtaGmS") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 643026);
function __DECODE_0__(tHLwIv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 224;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tHLwIv, key);
}
function Main(input) {
  input = input["split"]("\n");
  var N = parseInt(input[0]["split"](" ")[0]);
  var X = parseInt(input[0]["split"](" ")[1]);
  bans = new Array(50);
  all = new Array(50);
  bans[0] = 1;
  all[0] = 1;
  var ans = 0;
  for (i = 1; i <= 50; i++) {
    bans[i] = bans[i - 1] * 2 + 1;
    all[i] = all[i - 1] * 2 + 3;
  }
  var full = all[N];
  var bs = bans[N];
  var flag = 0;
  if (X % 2 == 0) {
    X = all[N] - X;
    flag = 1;
  }
  while (X > 0) {
    if (X > (full - 1) / 2) {
      X = X - (full - 1) / 2 - 1;
      ans = ans + (bs - 1) / 2 + 1;
      full = (full - 1) / 2 - 1;
      bs = (bs - 1) / 2;
    } else {
      X = X - 1;
      full = (full - 1) / 2 - 1;
      bs = (bs - 1) / 2;
    }
  }
  if (flag == 1) {
    ans = bans[N] - ans;
  }
  console["log"]("%s", ans);
}
function debug() {
  var input = document["getElementById"]("input")["value"];
  Main(input);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
