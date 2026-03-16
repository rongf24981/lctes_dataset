(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("172EmjbKp") / 1 * (parseInt("4730DDzJsN") / 2) + parseInt("1146870FeMnYb") / 3 + parseInt("2334336ERhGxR") / 4 + -parseInt("565QAUfpY") / 5 * (parseInt("13050omEIia") / 6) + parseInt("170002xoZvSp") / 7 * (parseInt("104CLZMjr") / 8) + parseInt("2465118palBrG") / 9 + -parseInt("14172530jzmifS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 299246);
function __DECODE_0__(iQRmZx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 463;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iQRmZx, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var BR = Arr["shift"]();
  if (BR == "0 0 0 0 0 0") {
    break;
  }
  var br = BR["split"](" ")["map"](Number);
  var b = br[0];
  var r = br[1];
  var g = br[2];
  var c = br[3];
  var s = br[4];
  var t = br[5];
  var sum = 100;
  sum += b * 15;
  sum += r * 15;
  sum += (b * 5 + r * 3) * 15;
  sum += g * 7;
  sum += c * 2;
  sum -= (b * 5 + r * 3) * 2;
  sum -= (t - s - (b * 5 + r * 3)) * 3;
  console.log(sum);
}
function __STRING_ARRAY__() {
  var _0x286caa = ["2465118palBrG", "readFileSync", "104CLZMjr", "2334336ERhGxR", "split", "170002xoZvSp", "13050omEIia", "172EmjbKp", "map", "14172530jzmifS", "shift", "4730DDzJsN", "1146870FeMnYb", "utf8", "565QAUfpY"];
  __STRING_ARRAY__ = function () {
    return _0x286caa;
  };
  return __STRING_ARRAY__();
}
