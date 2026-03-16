function __DECODE_0__(AkobHu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 104;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AkobHu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1173921ZOweGu") / 1 * (parseInt("2ZHiSzc") / 2) + -parseInt("129MvSBUT") / 3 * (parseInt("130148zreYSh") / 4) + -parseInt("7876365nQPgfF") / 5 + parseInt("1223034TPHmmR") / 6 + -parseInt("7AyeKIJ") / 7 * (-parseInt("12339256nFGpZt") / 8) + parseInt("9VgaCkg") / 9 * (-parseInt("8606970mRYJxG") / 10) + parseInt("45169916QZfUek") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 843620);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [h, a, b] = input["trim"]()["split"](" ")["map"](Number);
function __STRING_ARRAY__() {
  var _0x1738b0 = ["129MvSBUT", "7AyeKIJ", "1223034TPHmmR", "12339256nFGpZt", "45169916QZfUek", "8606970mRYJxG", "map", "130148zreYSh", "log", "7876365nQPgfF", "readFileSync", "1173921ZOweGu", "trim", "split", "utf8", "/dev/stdin", "9VgaCkg", "2ZHiSzc"];
  __STRING_ARRAY__ = function () {
    return _0x1738b0;
  };
  return __STRING_ARRAY__();
}
var cnt = 0;
for (var i = a; i <= b; i++) {
  if (h % i == 0) {
    cnt++;
  }
}
console["log"](cnt);
