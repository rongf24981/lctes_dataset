(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("16mciSVo") / 1 * (parseInt("8984nzjQtW") / 2) + parseInt("51666QwTixl") / 3 * (-parseInt("104bIbCzJ") / 4) + parseInt("331545CjDyxB") / 5 + -parseInt("5298LlwsTS") / 6 * (-parseInt("6377YrppxO") / 7) + -parseInt("222760BlKNGY") / 8 + -parseInt("31329Frowsa") / 9 * (parseInt("390OmXSCU") / 10) + parseInt("8098596QQXHzl") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 923710);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __DECODE_0__(KcUyvj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KcUyvj, key);
}
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var str = n["toString"](8) + "";
  str = str["replace"](/7/g, "9");
  str = str["replace"](/6/g, "8");
  str = str["replace"](/5/g, "7");
  str = str["replace"](/4/g, "5");
  console["log"](str);
}
function __STRING_ARRAY__() {
  var _0x1afacb = ["222760BlKNGY", "utf8", "16mciSVo", "31329Frowsa", "5298LlwsTS", "390OmXSCU", "8098596QQXHzl", "331545CjDyxB", "split", "/dev/stdin", "replace", "104bIbCzJ", "6377YrppxO", "log", "51666QwTixl", "toString", "readFileSync", "8984nzjQtW"];
  __STRING_ARRAY__ = function () {
    return _0x1afacb;
  };
  return __STRING_ARRAY__();
}
