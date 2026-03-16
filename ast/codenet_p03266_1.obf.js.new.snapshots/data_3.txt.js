(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("898136mJJNcr") / 1 + parseInt("4894FCJNyb") / 2 * (parseInt("1209lyOjnv") / 3) + parseInt("4IfwDsc") / 4 * (parseInt("519725DDkiIs") / 5) + parseInt("2003994qkdRIG") / 6 + -parseInt("49SBhRhU") / 7 * (-parseInt("572632qNYflA") / 8) + -parseInt("5907402XEcwrl") / 9 + parseInt("10YULmaX") / 10 * (-parseInt("17813158tISwts") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547518);
var lines = [];
var readline = require("readline");
var rl = readline["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
function __STRING_ARRAY__() {
  var _0xa119c3 = ["log", "5907402XEcwrl", "createInterface", "floor", "2003994qkdRIG", "close", "10YULmaX", "line", "split", "readline", "stdin", "stdout", "4894FCJNyb", "1209lyOjnv", "17813158tISwts", "572632qNYflA", "49SBhRhU", "4IfwDsc", "898136mJJNcr", "519725DDkiIs"];
  __STRING_ARRAY__ = function () {
    return _0xa119c3;
  };
  return __STRING_ARRAY__();
}
rl.on("line", function (x) {
  lines.push(x);
});
function __DECODE_0__(VJODjb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 420;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VJODjb, key);
}
rl.on("close", function () {
  var N = Number(lines[0]["split"](" ")[0]);
  var K = Number(lines[0].split(" ")[1]);
  var ans = 0;
  for (var i = 1; i <= K; i++) {
    if (i * 2 % K === 0) {
      if (Math["floor"]((N - i) / K) >= 1) {
        ans += Math.pow(Math.floor((N - i) / K) + 1, 3);
      } else {
        ans++;
      }
    }
  }
  console["log"](ans);
});
