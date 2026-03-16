(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("761qkvibj") / 1 * (parseInt("300XunFKL") / 2) + parseInt("501897pOJZYu") / 3 + -parseInt("40NJwveB") / 4 * (-parseInt("360075JCSpNe") / 5) + -parseInt("6YDIDkl") / 6 * (-parseInt("2432087ZtKXeD") / 7) + parseInt("6718448zXxkld") / 8 + parseInt("4027662FJAHAI") / 9 + parseInt("350SubRno") / 10 * (-parseInt("672870xhOath") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 495414);
function __DECODE_0__(qNBBDU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qNBBDU, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
function __STRING_ARRAY__() {
  var _0x544429 = ["501897pOJZYu", "40NJwveB", "6718448zXxkld", "map", "trim", "split", "300XunFKL", "6YDIDkl", "utf8", "2432087ZtKXeD", "350SubRno", "4027662FJAHAI", "360075JCSpNe", "761qkvibj", "log", "shift", "672870xhOath"];
  __STRING_ARRAY__ = function () {
    return _0x544429;
  };
  return __STRING_ARRAY__();
}
var v = arr["shift"]()["split"](" ")["map"](Number);
var sum = 0;
for (var i = 0; i < n; i++) {
  sum += v[i] - (i + 1);
}
console["log"](sum);
