function __STRING_ARRAY__() {
  var _0x431f54 = ["1981kGQHsV", "split", "132355imiYLd", "5453808JwLRLD", "7266hEsIlG", "readFileSync", "280725lFvXSy", "/dev/stdin", "utf8", "172194lOayrY", "869445miyqTn", "trim", "log", "422532dCbKRm"];
  __STRING_ARRAY__ = function () {
    return _0x431f54;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WIbNXT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 255;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WIbNXT, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("280725lFvXSy") / 1 + -parseInt("172194lOayrY") / 2 + -parseInt("869445miyqTn") / 3 + -parseInt("422532dCbKRm") / 4 + parseInt("132355imiYLd") / 5 + parseInt("7266hEsIlG") / 6 * (parseInt("1981kGQHsV") / 7) + parseInt("5453808JwLRLD") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 288640);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [a, b] = input["trim"]()["split"](" ").map(Number);
console["log"](Math.ceil(b / a));
