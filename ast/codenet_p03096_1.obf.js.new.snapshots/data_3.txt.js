'use strict';

function __DECODE_0__(NHryRA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 413;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NHryRA, key);
}
function __STRING_ARRAY__() {
  var _0x71722 = ["97602OgUXMi", "8104580YnMsCu", "/dev/stdin", "4386604JONXeX", "518rCjnbX", "shift", "readFileSync", "162962AVDdyg", "29035611TYjaem", "log", "934134krmmTI", "utf8", "pow", "14byfjHe", "not yet", "6819520HKDZPz"];
  __STRING_ARRAY__ = function () {
    return _0x71722;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("14byfjHe") / 1 * (parseInt("162962AVDdyg") / 2) + -parseInt("934134krmmTI") / 3 + -parseInt("4386604JONXeX") / 4 + -parseInt("8104580YnMsCu") / 5 + parseInt("97602OgUXMi") / 6 * (-parseInt("518rCjnbX") / 7) + parseInt("6819520HKDZPz") / 8 + parseInt("29035611TYjaem") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 986650);
function Main(input) {
  input = input.trim().split(/\s+/).map(x => x - 0);
  var N = input["shift"]();
  var last = [];
  for (let i = 0; i < 2000000; i++) {
    last[i] = "not yet";
  }
  last[input[0]] = 0;
  var dp = [1];
  var M = Math["pow"](10, 9) + 7;
  for (let i = 1; i < N; i++) {
    let c = input[i];
    if (last[c] === "not yet" || last[c] === i - 1) {
      last[c] = i;
      dp[i] = dp[i - 1];
      continue;
    }
    dp[i] = (dp[i - 1] + dp[last[c]]) % M;
    last[c] = i;
  }
  console["log"](dp.pop());
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
