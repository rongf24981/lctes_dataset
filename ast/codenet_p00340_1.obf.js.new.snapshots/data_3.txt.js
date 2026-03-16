(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("642695nOVqUG") / 1 + -parseInt("1243488MxpogW") / 2 + parseInt("1875864FSeRqz") / 3 + parseInt("2056860TrIfJP") / 4 + -parseInt("85310WcfvXX") / 5 * (parseInt("228VBZMue") / 6) + -parseInt("37681QSsUBC") / 7 * (parseInt("1160lURzwx") / 8) + -parseInt("90LWnIrX") / 9 * (-parseInt("764690bOkdEN") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 496253);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"](" ")["map"](Number);
var a = arr[0];
function __STRING_ARRAY__() {
  var _0x503db1 = ["map", "764690bOkdEN", "yes", "85310WcfvXX", "/dev/stdin", "642695nOVqUG", "utf8", "readFileSync", "90LWnIrX", "trim", "2056860TrIfJP", "split", "log", "1875864FSeRqz", "1243488MxpogW", "1160lURzwx", "37681QSsUBC", "228VBZMue"];
  __STRING_ARRAY__ = function () {
    return _0x503db1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SWznhL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 275;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SWznhL, key);
}
var b = arr[1];
var c = arr[2];
var d = arr[3];
if (a == b && c == d) {
  console["log"]("yes");
} else if (a == c && b == d) {
  console["log"]("yes");
} else if (a == d && b == c) {
  console.log("yes");
} else {
  console["log"]("no");
}
