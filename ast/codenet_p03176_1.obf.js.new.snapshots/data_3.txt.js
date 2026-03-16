function __DECODE_0__(NXMdEH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NXMdEH, key);
}
function __STRING_ARRAY__() {
  var _0x21fccc = ["276082aZmqES", "innerHTML", "map", "split", "utf8", "input", "result", "max", "log", "801444uxRPoJ", "6ydUlCe", "17507njaGSE", "3981990bkHSdR", "81bSqWcp", "readFileSync", "1483675nBBcfy", "fill", "output", "8iYUQoG", "/dev/stdin", "37980xLKdEb", "11133xnCucw", "value"];
  __STRING_ARRAY__ = function () {
    return _0x21fccc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("276082aZmqES") / 1 + -parseInt("801444uxRPoJ") / 2 + -parseInt("81bSqWcp") / 3 * (-parseInt("37980xLKdEb") / 4) + -parseInt("1483675nBBcfy") / 5 + parseInt("6ydUlCe") / 6 * (parseInt("17507njaGSE") / 7) + parseInt("8iYUQoG") / 8 * (-parseInt("11133xnCucw") / 9) + parseInt("3981990bkHSdR") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 234453);
function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0]);
  var h = input[1]["split"](" ")["map"](i => parseInt(i));
  var a = input[2]["split"](" ").map(i => parseInt(i));
  var dp = new Array(N + 1)["fill"](0);
  var ans = 0;
  for (var i = 0; i < N; i++) {
    var max = 0;
    tmp = a[i] + dp[h[i]];
    for (var j = h[i]; j < N + 1; j++) {
      if (tmp > dp[j]) {
        dp[j] = tmp;
      } else {
        break;
      }
    }
    ans = Math["max"](ans, dp[h[i]]);
  }
  console["log"]("%s", ans);
  return ans;
}
function debug(n) {
  var input = document.getElementById("input" + n)["value"];
  var ans = Main(input);
  var result = "WA";
  if (ans == document.getElementById("output" + n)["value"]["split"]("\n")[0]) {
    result = "AC";
  }
  document.getElementById("result" + n)["innerHTML"] = result;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
