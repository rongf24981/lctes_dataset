function __STRING_ARRAY__() {
  var _0x40eb51 = ["679600TYBKSH", "1709806Utdqzj", "676Wcabmx", "45474IOUGgf", "176083CJfpDv", "readFileSync", "2535JXLJVu", "trim", "9Opqzlc", "5yphYku", "utf8", "296600vvcIWJ", "41308uUmvQc"];
  __STRING_ARRAY__ = function () {
    return _0x40eb51;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OfGjLS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 315;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OfGjLS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("176083CJfpDv") / 1 + parseInt("41308uUmvQc") / 2 + parseInt("2535JXLJVu") / 3 * (parseInt("676Wcabmx") / 4) + -parseInt("5yphYku") / 5 * (-parseInt("45474IOUGgf") / 6) + parseInt("1709806Utdqzj") / 7 + -parseInt("296600vvcIWJ") / 8 * (parseInt("9Opqzlc") / 9) + -parseInt("679600TYBKSH") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 134178);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
for (var i = 0; i < Arr.length; i++) {
  var arr = Arr[i].split(" ");
  var a = arr[1] - 0 + (arr[2] - 0);
  var b = (arr[1] - 0) * 200 + (arr[2] - 0) * 300;
  console.log(arr[0] + " " + a + " " + b);
}
