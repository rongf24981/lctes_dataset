(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1009682izQjYy") / 1 + -parseInt("8KxVxWv") / 2 * (-parseInt("442137isfuDv") / 3) + parseInt("3240076rHGlYa") / 4 + parseInt("1658360ivbRdO") / 5 + parseInt("6ihMTzu") / 6 * (parseInt("7322259PxIbKa") / 7) + parseInt("8oiZTiP") / 8 * (-parseInt("1759878aRckWF") / 9) + parseInt("160tacTIv") / 10 * (-parseInt("2059222Aerdmk") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 596152);
function __DECODE_0__(sDoCxF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 326;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sDoCxF, key);
}
function __STRING_ARRAY__() {
  var _0x429ab4 = ["7322259PxIbKa", "alert", "split", "8KxVxWv", "1009682izQjYy", "2059222Aerdmk", "utf8", "1759878aRckWF", "log", "6ihMTzu", "shift", "abs", "1658360ivbRdO", "/dev/stdin", "160tacTIv", "442137isfuDv", "8oiZTiP", "3240076rHGlYa"];
  __STRING_ARRAY__ = function () {
    return _0x429ab4;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.replace(/\n$/, "")["split"]("\n");
var n = Arr["shift"]() - 0;
for (var I = 0; I < n; I++) {
  var arr = Arr[I].split(":");
  var h = parseInt(arr[0], 10);
  var m = parseInt(arr[1], 10);
  var H = h * 30 + m * (30 / 60);
  var M = m * 6;
  var hm = Math["abs"](H - M);
  var ans;
  if (hm >= 0 && hm < 30) {
    ans = "alert";
  } else if (hm >= 90 && hm <= 180) {
    ans = "safe";
  } else {
    ans = "warning";
  }
  console["log"](ans);
}
