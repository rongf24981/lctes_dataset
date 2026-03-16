function __DECODE_0__(BneuWO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 139;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BneuWO, key);
}
function __STRING_ARRAY__() {
  var _0x2a3d97 = ["586224yTUNOq", "31298Bnocaf", "log", "72aBfAXo", "split", "1122560NQHwYo", "1894740QOyDYs", "/dev/stdin", "5503338lOSgmW", "59515yWiNMQ", "461932XrRerZ", "map", "utf8", "116XjQAjH", "42JsiCHw", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x2a3d97;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("461932XrRerZ") / 1 + parseInt("31298Bnocaf") / 2 * (-parseInt("72aBfAXo") / 3) + -parseInt("116XjQAjH") / 4 * (parseInt("59515yWiNMQ") / 5) + parseInt("1894740QOyDYs") / 6 + parseInt("42JsiCHw") / 7 * (-parseInt("586224yTUNOq") / 8) + parseInt("5503338lOSgmW") / 9 + parseInt("1122560NQHwYo") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 341029);
function Main(input) {
  input = input["split"](" ");
  X = 2;
  N = input["map"](input => parseInt(input, 10));
  if (N % X == 0) {
    console["log"](N[0]);
  } else {
    var ans = N[0] * X;
    console["log"](ans);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
