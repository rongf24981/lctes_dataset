(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("33474igXLpZ") / 1 + parseInt("264306YgDYsA") / 2 + -parseInt("4002rELGZk") / 3 + parseInt("656056auliXX") / 4 + -parseInt("1125040fqVDFI") / 5 + parseInt("830286cXLVAA") / 6 * (-parseInt("7tXxYXp") / 7) + parseInt("8UGbBmO") / 8 * (parseInt("2291202TUckBg") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 152548);
function __DECODE_0__(IUfCak, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 453;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IUfCak, key);
}
function __STRING_ARRAY__() {
  var _0x2e035c = ["/dev/stdin", "utf8", "7tXxYXp", "log", "split", "33474igXLpZ", "sort", "2291202TUckBg", "push", "4002rELGZk", "830286cXLVAA", "1125040fqVDFI", "656056auliXX", "264306YgDYsA", "trim", "shift", "8UGbBmO"];
  __STRING_ARRAY__ = function () {
    return _0x2e035c;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var team = [];
  for (var i = 0; i < n; i++) {
    var arr = Arr.shift()["split"](" ");
    var name = arr["shift"]();
    var scoreA = 0;
    var scoreB = 0;
    for (var j = 0; j < n - 1; j++) {
      if (arr[j] - 0 === 0) {
        scoreA++;
      }
      if (arr[j] - 0 === 1) {
        scoreB++;
      }
    }
    team["push"]([name, scoreA * 100 + (10 - scoreB) + (10 - j) * 0.01]);
  }
  team["sort"](function (a, b) {
    return b[1] - a[1];
  });
  team.forEach(function (v) {
    console["log"](v[0]);
  });
}
