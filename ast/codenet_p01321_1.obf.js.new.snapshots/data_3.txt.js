function __STRING_ARRAY__() {
  var _0x40f35d = ["155704hqALyA", "shift", "sort", "3RKpbFk", "split", "210735BeRtre", "13848260uIuYbF", "42GzIZUU", "965040fnNCtQ", "readFileSync", "871251noDgrq", "356155uSaUjv", "714880xmanvM", "map", "6SVniYY", "log", "trim", "utf8", "length"];
  __STRING_ARRAY__ = function () {
    return _0x40f35d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XswBxu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 114;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XswBxu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3RKpbFk") / 1 * (parseInt("155704hqALyA") / 2) + -parseInt("871251noDgrq") / 3 + parseInt("965040fnNCtQ") / 4 + parseInt("356155uSaUjv") / 5 * (-parseInt("6SVniYY") / 6) + parseInt("42GzIZUU") / 7 * (-parseInt("714880xmanvM") / 8) + parseInt("210735BeRtre") / 9 + parseInt("13848260uIuYbF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 518137);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var S = [];
  for (var i = 0; i < n; i++) {
    var arr = Arr["shift"]().split(" ")["map"](Number);
    var sum = arr.reduce(function (a, b) {
      return a + b;
    });
    S.push(sum);
  }
  S["sort"](function (a, b) {
    return b - a;
  });
  console["log"](S[0] + " " + S[S["length"] - 1]);
}
