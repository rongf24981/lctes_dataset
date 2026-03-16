function __STRING_ARRAY__() {
  var _0x2f4f87 = ["42Vxdfjp", "12ZpYbsp", "fill", "882204ijTIYh", "915670cmjKyp", "utf8", "19RMcGVB", "trim", "1177251wjBync", "map", "5297225ByOdTt", "log", "4BGquFa", "max", "355040GUyiGo", "44996GAarql", "10664643fbSjXS", "readFileSync", "63WHrkwL", "length", "split"];
  __STRING_ARRAY__ = function () {
    return _0x2f4f87;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rbnypK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 491;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rbnypK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("19RMcGVB") / 1 * (parseInt("44996GAarql") / 2) + parseInt("1177251wjBync") / 3 + -parseInt("4BGquFa") / 4 * (parseInt("5297225ByOdTt") / 5) + -parseInt("882204ijTIYh") / 6 * (parseInt("42Vxdfjp") / 7) + parseInt("355040GUyiGo") / 8 + parseInt("63WHrkwL") / 9 * (parseInt("915670cmjKyp") / 10) + -parseInt("10664643fbSjXS") / 11 * (-parseInt("12ZpYbsp") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 533092);
function Main(input) {
  input = input.split("\n");
  var p = input[0]["split"](" ")["map"](Number);
  var max = p[1] - 0;
  var dp = new Array(p[0] + 1);
  for (var n = 0; n < p[0] + 1; n++) {
    dp[n] = new Array(max + 1)["fill"](0);
  }
  for (var i = 1; i < input["length"]; i++) {
    var mem = input[i]["split"](" ")["map"](Number);
    for (var j = 0; j <= max; j++) {
      if (j >= mem[1]) {
        dp[i][j] = Math["max"](dp[i - 1][j - mem[1]] + mem[0], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console["log"](dp[p[0]][max]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
