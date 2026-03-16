function __STRING_ARRAY__() {
  var _0x4b4a88 = ["push", "1146184fPCYWJ", "645386ukirlO", "2294454vEftbI", "2619440VCUlhO", "113445uzUIog", "7gYgdjc", "4piPnLI", "split", "log", "1069321oyVjRZ", "/dev/stdin", "5SmWojS", "sort", "replace", "trim", "join", "utf8", "100vWucwc", "3548667qWfSZA", "408sEdBqA"];
  __STRING_ARRAY__ = function () {
    return _0x4b4a88;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(MgrbYW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 164;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MgrbYW, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("5SmWojS") / 1 * (-parseInt("645386ukirlO") / 2) + parseInt("3548667qWfSZA") / 3 * (-parseInt("4piPnLI") / 4) + parseInt("2619440VCUlhO") / 5 + -parseInt("2294454vEftbI") / 6 + parseInt("7gYgdjc") / 7 * (parseInt("1146184fPCYWJ") / 8) + parseInt("113445uzUIog") / 9 * (parseInt("100vWucwc") / 10) + parseInt("1069321oyVjRZ") / 11 * (parseInt("408sEdBqA") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 919622);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr.shift() - 0;
var a = [];
for (var i = 0; i < n; i++) {
  a["push"](arr[i]["split"](" ").map(Number));
}
a["sort"](function (a, b) {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
console["log"](a["join"]("\n")["replace"](/,/g, " "));
