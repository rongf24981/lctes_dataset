function __DECODE_0__(YVqzdv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 454;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YVqzdv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("487917KBQkHd") / 1 + parseInt("528444oIPQzq") / 2 + parseInt("1088187lsxbZZ") / 3 * (-parseInt("4vDKXbo") / 4) + -parseInt("5itYBIY") / 5 * (parseInt("8217366eXbWIj") / 6) + -parseInt("9756775nwQKsD") / 7 + parseInt("136hBictq") / 8 * (-parseInt("515052pOhpKH") / 9) + parseInt("41835980FGWlrx") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 836746);
function __STRING_ARRAY__() {
  var _0xce5d45 = ["487917KBQkHd", "515052pOhpKH", "41835980FGWlrx", "sort", "136hBictq", "/dev/stdin", "8217366eXbWIj", "1088187lsxbZZ", "abs", "9756775nwQKsD", "trim", "log", "4vDKXbo", "5itYBIY", "utf8", "528444oIPQzq"];
  __STRING_ARRAY__ = function () {
    return _0xce5d45;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]().split(" ").map(Number);
var [a, b, c, d] = arr["sort"]((a, b) => b - a);
console["log"](Math["abs"](a + d - (b + c)));
