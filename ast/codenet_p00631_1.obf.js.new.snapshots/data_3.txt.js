function __DECODE_0__(gaWLaR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 177;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gaWLaR, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("14LxHkcR") / 1 * (-parseInt("6122iddKWF") / 2) + parseInt("7035HkKxhL") / 3 * (-parseInt("1764EWWfUD") / 4) + -parseInt("733215MRwtFE") / 5 + parseInt("6oFkWFI") / 6 * (parseInt("2656122vuxxZA") / 7) + -parseInt("3975512NqeMCZ") / 8 + -parseInt("110664lrHCXF") / 9 * (-parseInt("680jizukB") / 10) + parseInt("12051644kiSeGv") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 590597);
function bomb(a, b, i) {
  if (i == n) {
    min = Math.min(min, Math.abs(a - b));
    return;
  }
  bomb(a + arr[i], b, i + 1);
  bomb(a, b + arr[i], i + 1);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
function __STRING_ARRAY__() {
  var _0x448f26 = ["733215MRwtFE", "1764EWWfUD", "readFileSync", "680jizukB", "6122iddKWF", "utf8", "14LxHkcR", "6oFkWFI", "12051644kiSeGv", "2656122vuxxZA", "7035HkKxhL", "110664lrHCXF", "split", "map", "3975512NqeMCZ", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x448f26;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  var min = Infinity;
  bomb(0, 0, 0);
  console.log(min);
}
