(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("51062ygjuHa") / 1 + -parseInt("1303274MBccKS") / 2 + -parseInt("17964DxqhTi") / 3 * (-parseInt("56AunQut") / 4) + -parseInt("1473870qPzaBF") / 5 + parseInt("792942ooSvKO") / 6 * (parseInt("7RYirBp") / 7) + parseInt("325576oUqkJZ") / 8 * (-parseInt("9qLYruk") / 9) + -parseInt("13694860qREiJO") / 10 * (-parseInt("11HOOnIW") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547305);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x3b973b = ["1303274MBccKS", "readFileSync", "log", "9qLYruk", "17964DxqhTi", "7RYirBp", "792942ooSvKO", "51062ygjuHa", "325576oUqkJZ", "split", "1473870qPzaBF", "reverse", "13694860qREiJO", "utf8", "11HOOnIW", "56AunQut"];
  __STRING_ARRAY__ = function () {
    return _0x3b973b;
  };
  return __STRING_ARRAY__();
}
var string = input.trim();
function __DECODE_0__(KtYuiZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 155;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KtYuiZ, key);
}
console["log"](reverse(string));
function reverse(s) {
  return string["split"]("")["reverse"]().join("");
}
