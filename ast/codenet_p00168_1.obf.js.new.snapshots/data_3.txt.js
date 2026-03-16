(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("963621mbKpAd") / 1 + -parseInt("1892622ArqATV") / 2 * (parseInt("3lytgpy") / 3) + parseInt("508UYBizM") / 4 * (-parseInt("17285FpbZbB") / 5) + parseInt("84vyMrsX") / 6 * (parseInt("583681ZbZJHN") / 7) + -parseInt("3360152ZJLlUm") / 8 * (parseInt("9BYaces") / 9) + -parseInt("4403150giBAVi") / 10 + parseInt("8637310LUePaH") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 670509);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var dp = [1, 2, 4];
function __DECODE_0__(PRfNGg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 418;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PRfNGg, key);
}
for (var i = 3; i <= 31; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  console["log"](Math.ceil(dp[n - 1] / 3650));
}
function __STRING_ARRAY__() {
  var _0x3637b1 = ["utf8", "4403150giBAVi", "583681ZbZJHN", "split", "17285FpbZbB", "3360152ZJLlUm", "shift", "508UYBizM", "8637310LUePaH", "readFileSync", "trim", "9BYaces", "84vyMrsX", "log", "3lytgpy", "963621mbKpAd", "1892622ArqATV"];
  __STRING_ARRAY__ = function () {
    return _0x3637b1;
  };
  return __STRING_ARRAY__();
}
