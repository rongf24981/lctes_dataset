(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("613065hztneF") / 1 + -parseInt("2INEIhV") / 2 * (-parseInt("3705759cFalZW") / 3) + -parseInt("4161964IvddoW") / 4 + -parseInt("115QgPECC") / 5 * (-parseInt("123834JTlIQX") / 6) + parseInt("5518156OYmBaZ") / 7 * (-parseInt("8miyZgN") / 8) + -parseInt("9wWRXsx") / 9 * (-parseInt("3050490WvmVKu") / 10) + -parseInt("12100EstKxD") / 11 * (-parseInt("1896NcCmWM") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 973065);
function __STRING_ARRAY__() {
  var _0x208498 = ["split", "push", "1896NcCmWM", "2INEIhV", "9wWRXsx", "map", "115QgPECC", "stdin", "3050490WvmVKu", "4161964IvddoW", "stdout", "log", "8miyZgN", "line", "sort", "5518156OYmBaZ", "613065hztneF", "3705759cFalZW", "close", "12100EstKxD", "123834JTlIQX"];
  __STRING_ARRAY__ = function () {
    return _0x208498;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(nvuxqi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nvuxqi, key);
}
var readline = require("readline");
var lines = [];
var result = 0;
var rl = readline.createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
rl.on("line", function (x) {
  lines["push"](x);
});
rl.on("close", function () {
  var N = Number(lines[0]["split"](" ")[0]);
  var M = Number(lines[0].split(" ")[1]);
  var X = lines[1]["split"](" ")["map"](value => Number(value));
  X["sort"]((a, b) => a - b);
  var sum = Array(M).fill(0);
  for (var i = 1; i < M; i++) {
    sum[i] = X[i] - X[i - 1];
  }
  sum.sort((a, b) => b - a);
  for (var i = N - 1; i < M; i++) {
    result += sum[i];
  }
  console["log"](result);
});
