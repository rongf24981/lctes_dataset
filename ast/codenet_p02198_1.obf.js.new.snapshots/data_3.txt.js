function __DECODE_0__(ZqYldV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 114;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZqYldV, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1374246OYDeQr") / 1 + -parseInt("2rSzvQw") / 2 * (parseInt("4853091jOdyqb") / 3) + -parseInt("4385032VVeWOX") / 4 + parseInt("1723970CVwneE") / 5 + -parseInt("60DtKenR") / 6 * (-parseInt("82523plIwvJ") / 7) + parseInt("13465872YSYfwW") / 8 + parseInt("25200981zYoSPG") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 857826);
function __STRING_ARRAY__() {
  var _0x59a05e = ["60DtKenR", "utf8", "/dev/stdin", "readFileSync", "2rSzvQw", "map", "4853091jOdyqb", "1723970CVwneE", "13465872YSYfwW", "4385032VVeWOX", "25200981zYoSPG", "split", "log", "trim", "1374246OYDeQr", "82523plIwvJ"];
  __STRING_ARRAY__ = function () {
    return _0x59a05e;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [a, b] = input["trim"]()["split"](" ")["map"](Number);
console["log"](a * b);
