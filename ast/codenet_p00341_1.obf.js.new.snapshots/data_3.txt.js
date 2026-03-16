function __STRING_ARRAY__() {
  var _0xef6dcd = ["log", "5936IxcohY", "905200BbeiDU", "readFileSync", "/dev/stdin", "map", "3673206ShoElK", "985617twavoR", "trim", "4250862TJaUus", "576339bRujpv", "1615170woQjni", "yes", "8uqvcvJ", "5jTcgBQ", "327MPxPDv", "utf8", "split"];
  __STRING_ARRAY__ = function () {
    return _0xef6dcd;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZzOcWI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 375;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZzOcWI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("576339bRujpv") / 1 + parseInt("5936IxcohY") / 2 * (-parseInt("327MPxPDv") / 3) + -parseInt("905200BbeiDU") / 4 + parseInt("5jTcgBQ") / 5 * (parseInt("3673206ShoElK") / 6) + parseInt("4250862TJaUus") / 7 + -parseInt("8uqvcvJ") / 8 * (-parseInt("985617twavoR") / 9) + parseInt("1615170woQjni") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 364346);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"](" ")["map"](Number);
arr.sort(function (a, b) {
  return a - b;
});
var sum = 0;
if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]) {
  sum++;
}
if (arr[4] == arr[5] && arr[5] == arr[6] && arr[6] == arr[7]) {
  sum++;
}
if (arr[8] == arr[9] && arr[9] == arr[10] && arr[10] == arr[11]) {
  sum++;
}
console["log"](sum == 3 ? "yes" : "no");
