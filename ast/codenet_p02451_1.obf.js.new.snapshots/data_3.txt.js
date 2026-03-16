(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("395926afMWQF") / 1 + parseInt("46586HPyKCo") / 2 + parseInt("892608ldQaVe") / 3 + parseInt("728164xQAlKP") / 4 * (parseInt("5asqyDZ") / 5) + parseInt("42bnXNVe") / 6 * (parseInt("106239GgDnIw") / 7) + -parseInt("88UjQvNZ") / 8 * (-parseInt("339984AQiglI") / 9) + parseInt("316670aKUSvF") / 10 * (-parseInt("121MvKdxx") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 280382);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
var n = arr["shift"]() - 0;
function __STRING_ARRAY__() {
  var _0x55c6c2 = ["set", "readFileSync", "has", "106239GgDnIw", "log", "728164xQAlKP", "121MvKdxx", "5asqyDZ", "316670aKUSvF", "892608ldQaVe", "395926afMWQF", "trim", "shift", "46586HPyKCo", "88UjQvNZ", "339984AQiglI", "42bnXNVe"];
  __STRING_ARRAY__ = function () {
    return _0x55c6c2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(uSTovI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 289;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uSTovI, key);
}
var a = arr["shift"]().split(" ");
var myMap = new Map();
for (var i = 0; i < n; i++) {
  myMap["set"](a[i], 0);
}
var q = arr["shift"]();
var s = "";
for (var i = 0; i < q; i++) {
  s += (myMap["has"](arr[i]) ? 1 : 0) + "\n";
}
console["log"](s["trim"]());
