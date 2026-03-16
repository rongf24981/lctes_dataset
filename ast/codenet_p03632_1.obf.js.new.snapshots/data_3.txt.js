function __DECODE_0__(RlOduD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 242;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RlOduD, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4mOkJDA") / 1 * (parseInt("134898bmgwkp") / 2) + parseInt("29901vxEpgi") / 3 * (-parseInt("596AhAIck") / 4) + parseInt("6887955NFrwhQ") / 5 + -parseInt("30QvzgnM") / 6 * (-parseInt("849198zuvCGX") / 7) + -parseInt("368NRvnXi") / 8 * (-parseInt("45414vYWspe") / 9) + parseInt("4260AcUHdN") / 10 * (parseInt("41371yFkwyI") / 11) + -parseInt("20467020UcOOFu") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 897591);
function Main(inp) {
  var input = inp["split"]("\n")[0]["split"](" ")["map"](function (n) {
    return Number(n);
  });
  var start = Math["max"](input[0], input[2]);
  var end = Math["min"](input[1], input[3]);
  var overlap = Math["max"](0, end - start);
  console["log"](overlap);
}
function __STRING_ARRAY__() {
  var _0x19469f = ["max", "596AhAIck", "30QvzgnM", "4mOkJDA", "readFileSync", "log", "4260AcUHdN", "split", "min", "45414vYWspe", "map", "20467020UcOOFu", "849198zuvCGX", "/dev/stdin", "368NRvnXi", "6887955NFrwhQ", "41371yFkwyI", "134898bmgwkp", "utf8", "29901vxEpgi"];
  __STRING_ARRAY__ = function () {
    return _0x19469f;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
