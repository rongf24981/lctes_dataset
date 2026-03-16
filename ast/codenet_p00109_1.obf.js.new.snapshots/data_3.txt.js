function __DECODE_0__(VyjRuV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 411;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VyjRuV, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("473416aHERRv") / 1 + -parseInt("61108dlLZnY") / 2 * (parseInt("24eSYuvX") / 3) + parseInt("174776LPOhMf") / 4 + -parseInt("240GStwrP") / 5 * (parseInt("3570SrqQCJ") / 6) + parseInt("231WQDNDD") / 7 * (parseInt("66216lcGiXZ") / 8) + parseInt("1159821ZExrcO") / 9 + parseInt("686870vvgMGv") / 10 * (parseInt("88ZrayjD") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 248792);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x1fc767 = ["88ZrayjD", "61108dlLZnY", "shift", "24eSYuvX", "66216lcGiXZ", "473416aHERRv", "/dev/stdin", "686870vvgMGv", "log", "slice", "1159821ZExrcO", "trim", "240GStwrP", "3570SrqQCJ", "split", "174776LPOhMf", "231WQDNDD"];
  __STRING_ARRAY__ = function () {
    return _0x1fc767;
  };
  return __STRING_ARRAY__();
}
var L = Arr["shift"]() - 0;
for (var i = 0; i < L; i++) {
  var str = Arr[i];
  str = str["slice"](0, -1);
  var num = eval(str);
  console["log"](parseInt(num, 10));
}
