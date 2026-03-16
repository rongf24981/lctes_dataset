function __STRING_ARRAY__() {
  var _0x528570 = ["trim", "map", "580UqefaE", "6380620VBRLlm", "712RdJPbs", "1422336VVSnzP", "log", "285798QjSicy", "3eAaGRx", "11JdMpDy", "3696385TJtcNY", "utf8", "19205JveFEz", "readFileSync", "543814CLvtkV", "3366sfWdZh"];
  __STRING_ARRAY__ = function () {
    return _0x528570;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(uWTJag, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uWTJag, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("285798QjSicy") / 1 + parseInt("543814CLvtkV") / 2 * (parseInt("3eAaGRx") / 3) + parseInt("580UqefaE") / 4 * (-parseInt("19205JveFEz") / 5) + -parseInt("1422336VVSnzP") / 6 + parseInt("3696385TJtcNY") / 7 + -parseInt("712RdJPbs") / 8 * (parseInt("3366sfWdZh") / 9) + -parseInt("6380620VBRLlm") / 10 * (-parseInt("11JdMpDy") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 324939);
function Main(s) {
  s = s.split(" ")["map"](a => parseInt(a));
  console["log"](s[0] + s[1] >= s[2] ? "Yes" : "No");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
