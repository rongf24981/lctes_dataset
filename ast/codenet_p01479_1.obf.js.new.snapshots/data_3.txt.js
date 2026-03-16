function __DECODE_0__(UeGpYK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 305;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UeGpYK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("339419wsuaeg") / 1 + -parseInt("403916GzZtWr") / 2 + -parseInt("1157286nLsXuZ") / 3 * (-parseInt("4pZEiaY") / 4) + -parseInt("1692095AwLUvw") / 5 * (-parseInt("6KyfeaL") / 6) + parseInt("504dpFBcf") / 7 * (-parseInt("49064qeYehp") / 8) + -parseInt("971649IVOkkT") / 9 + parseInt("276880gdBQUi") / 10 * (parseInt("242SnZWEm") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 242403);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var str = input["replace"](/egg/g, "E")["replace"](/chicken/g, "C");
function __STRING_ARRAY__() {
  var _0x3ed0cf = ["log", "1692095AwLUvw", "chicken", "utf8", "6KyfeaL", "replace", "egg", "49064qeYehp", "4pZEiaY", "242SnZWEm", "slice", "1157286nLsXuZ", "/dev/stdin", "forEach", "504dpFBcf", "403916GzZtWr", "276880gdBQUi", "339419wsuaeg", "971649IVOkkT", "length"];
  __STRING_ARRAY__ = function () {
    return _0x3ed0cf;
  };
  return __STRING_ARRAY__();
}
var ary = str.replace(/EE/g, "EAE").replace(/CC/g, "CAC").split("A");
var ans = "";
ary["forEach"](function (v) {
  if (ans["length"] < v.length) {
    ans = v;
  }
});
console["log"](ans["slice"](-1) == "E" ? "egg" : "chicken");
