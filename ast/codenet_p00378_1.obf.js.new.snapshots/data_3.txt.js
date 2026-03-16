(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1jGnpKV") / 1 * (-parseInt("595534mGOhRI") / 2) + -parseInt("3666hkMYmx") / 3 * (-parseInt("332tRJREj") / 4) + parseInt("920675ZvCtSI") / 5 + parseInt("2044194OcQQuY") / 6 * (parseInt("7TOopnl") / 7) + parseInt("169160kFUuHP") / 8 + parseInt("3836097bBsxlC") / 9 + parseInt("2218850pClvzQ") / 10 * (-parseInt("55pdWQhh") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 261980);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [a, b, x] = input["trim"]()["split"](" ")["map"](Number);
var min = Infinity;
for (var i = 0; i <= 20; i++) {
  for (var j = 0; j <= 40; j++) {
    if (i * 1000 + j * 500 >= x) {
      min = Math["min"](min, i * a + j * b);
    }
  }
}
function __STRING_ARRAY__() {
  var _0x3ac021 = ["log", "3836097bBsxlC", "readFileSync", "min", "595534mGOhRI", "map", "3666hkMYmx", "trim", "2218850pClvzQ", "/dev/stdin", "2044194OcQQuY", "920675ZvCtSI", "55pdWQhh", "7TOopnl", "169160kFUuHP", "332tRJREj", "1jGnpKV", "split"];
  __STRING_ARRAY__ = function () {
    return _0x3ac021;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ahbGhN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 471;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ahbGhN, key);
}
console["log"](min);
