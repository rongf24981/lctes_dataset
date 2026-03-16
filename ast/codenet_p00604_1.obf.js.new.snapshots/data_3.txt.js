function __STRING_ARRAY__() {
  var _0x418045 = ["2149995iEgjLZ", "length", "utf8", "1022249mzNGKH", "log", "180jxvZXJ", "/dev/stdin", "1864751vmpKYh", "6906365UUPEWZ", "4TXdBvi", "trim", "sort", "85327CJhkFo", "split", "1666845dYXTTo", "8dejSqe", "forEach", "5377980ecORtz", "2qkkiQc", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x418045;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1022249mzNGKH") / 1 * (-parseInt("2qkkiQc") / 2) + -parseInt("2149995iEgjLZ") / 3 + parseInt("4TXdBvi") / 4 * (parseInt("6906365UUPEWZ") / 5) + -parseInt("5377980ecORtz") / 6 + -parseInt("1864751vmpKYh") / 7 + parseInt("8dejSqe") / 8 * (parseInt("1666845dYXTTo") / 9) + parseInt("180jxvZXJ") / 10 * (parseInt("85327CJhkFo") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 848965);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __DECODE_0__(FlLqKd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 248;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FlLqKd, key);
}
while (true) {
  if (Arr["length"] == 0) {
    break;
  }
  var n = Arr.shift();
  var arr = Arr.shift()["split"](" ").map(Number);
  arr["sort"](function (a, b) {
    return a - b;
  });
  var sum = 0;
  var time = 0;
  arr["forEach"](function (v) {
    sum += v + time;
    time += v;
  });
  console["log"](sum);
}
