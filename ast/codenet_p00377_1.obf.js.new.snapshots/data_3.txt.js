function __STRING_ARRAY__() {
  var _0x51bebc = ["367074NRGpKh", "floor", "log", "map", "1011736QnSVmS", "reduce", "split", "10pufFnv", "readFileSync", "570942YFQFuV", "trim", "3426460VxTlrh", "utf8", "14gknaPc", "471925ZOvWQP", "104UfJkix", "146244tHSLZn", "8FLvzDC", "7415276XEviSu"];
  __STRING_ARRAY__ = function () {
    return _0x51bebc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("471925ZOvWQP") / 1 + parseInt("1011736QnSVmS") / 2 + parseInt("146244tHSLZn") / 3 * (parseInt("8FLvzDC") / 4) + -parseInt("3426460VxTlrh") / 5 + -parseInt("570942YFQFuV") / 6 * (parseInt("14gknaPc") / 7) + -parseInt("104UfJkix") / 8 * (-parseInt("367074NRGpKh") / 9) + parseInt("10pufFnv") / 10 * (parseInt("7415276XEviSu") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 460167);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
var [n, c] = arr[0]["split"](" ")["map"](Number);
var p = arr[1]["split"](" ").map(Number);
function __DECODE_0__(ysFcmm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 219;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ysFcmm, key);
}
var sum = p["reduce"]((a, b) => a + b);
var x = sum % (n + 1) == 0 ? 0 : 1;
console["log"](Math["floor"](sum / (n + 1)) + x);
