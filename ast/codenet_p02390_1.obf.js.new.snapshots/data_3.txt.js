(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("29093wAeqWy") / 1 * (parseInt("4IQmmwT") / 2) + parseInt("11757IbIWuO") / 3 * (-parseInt("660DslWyi") / 4) + -parseInt("4038270QOZEdH") / 5 + parseInt("684AabKdH") / 6 * (-parseInt("14595cJAUyI") / 7) + parseInt("424096pOcthX") / 8 * (-parseInt("153onXhyi") / 9) + -parseInt("920nFfBfF") / 10 * (parseInt("27896zLiDvf") / 11) + parseInt("45444036QbuTzk") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 902322);
var x = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(qcvRcr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 455;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qcvRcr, key);
}
x = parseInt(x, 10);
function __STRING_ARRAY__() {
  var _0x57b414 = ["log", "readFileSync", "4IQmmwT", "424096pOcthX", "11757IbIWuO", "14595cJAUyI", "45444036QbuTzk", "utf8", "29093wAeqWy", "27896zLiDvf", "/dev/stdin", "920nFfBfF", "684AabKdH", "4038270QOZEdH", "153onXhyi", "660DslWyi", "floor"];
  __STRING_ARRAY__ = function () {
    return _0x57b414;
  };
  return __STRING_ARRAY__();
}
var h = Math.floor(x / 3600);
var m = Math["floor"](x % 3600 / 60);
var s = x % 3600 % 60;
console["log"](h + ":" + m + ":" + s);
