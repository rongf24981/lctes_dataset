(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("908884ZcMjiv") / 1 + parseInt("311370hZOBNk") / 2 + -parseInt("25812vnUNrM") / 3 * (-parseInt("172esrtzf") / 4) + parseInt("3758210BNnfUy") / 5 + parseInt("5490102ZZClIC") / 6 + parseInt("298095dakNGN") / 7 + -parseInt("1232aEasVb") / 8 * (parseInt("155862kYamfy") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 476813);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
function __STRING_ARRAY__() {
  var _0xe8ebf9 = ["readFileSync", "155862kYamfy", "172esrtzf", "908884ZcMjiv", "log", "1232aEasVb", "map", "/dev/stdin", "floor", "split", "25812vnUNrM", "5490102ZZClIC", "3758210BNnfUy", "311370hZOBNk", "slice", "shift", "298095dakNGN"];
  __STRING_ARRAY__ = function () {
    return _0xe8ebf9;
  };
  return __STRING_ARRAY__();
}
var lines = input["split"]("\n");
function __DECODE_0__(fSzJiC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 206;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fSzJiC, key);
}
var line;
while (line = lines["shift"]()) {
  var time = line["split"](" ")["map"](function (n) {
    return +n;
  });
  if (time[0] == -1 && time[1] == -1 && time[2] == -1) {
    break;
  }
  var hour = time[0];
  var min = time[1] + hour * 60;
  var sec = time[2] + min * 60;
  var rem = 7200 - sec;
  var rem3 = rem * 3;
  var remSec = rem % 60;
  var remSec3 = rem3 % 60;
  rem = Math.floor(rem / 60);
  rem3 = Math["floor"](rem3 / 60);
  var remMin = rem % 60;
  var remMin3 = rem3 % 60;
  var remHour = Math["floor"](rem / 60);
  var remHour3 = Math["floor"](rem3 / 60);
  console["log"](("0" + remHour)["slice"](-2) + ":" + ("0" + remMin)["slice"](-2) + ":" + ("0" + remSec)["slice"](-2));
  console["log"](("0" + remHour3)["slice"](-2) + ":" + ("0" + remMin3).slice(-2) + ":" + ("0" + remSec3)["slice"](-2));
}
