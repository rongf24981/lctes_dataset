(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1vbclSK") / 1 * (-parseInt("1154166doFSdf") / 2) + parseInt("413799pmAhAO") / 3 * (-parseInt("4uDIxwV") / 4) + -parseInt("570UxNDMu") / 5 * (-parseInt("46758PcZzXJ") / 6) + -parseInt("70fMHqfB") / 7 * (parseInt("41864nZhlQr") / 8) + parseInt("10521HVargK") / 9 * (parseInt("270vWyZAJ") / 10) + parseInt("3965533ncENps") / 11 * (parseInt("24whiWHK") / 12) + parseInt("9100gileQU") / 13 * (-parseInt("5712SmvfUQ") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 588025);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __DECODE_0__(HPAZLH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 357;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HPAZLH, key);
}
function __STRING_ARRAY__() {
  var _0x2c1cd7 = ["270vWyZAJ", "1vbclSK", "readFileSync", "utf8", "70fMHqfB", "split", "9100gileQU", "3965533ncENps", "5712SmvfUQ", "570UxNDMu", "/dev/stdin", "413799pmAhAO", "4uDIxwV", "1154166doFSdf", "46758PcZzXJ", "log", "41864nZhlQr", "24whiWHK", "10521HVargK"];
  __STRING_ARRAY__ = function () {
    return _0x2c1cd7;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < 4; i++) {
  var arr = Arr[i]["split"](" ").map(Number);
  if (arr[0] == 1) {
    console.log(arr[1] * 6000);
  }
  if (arr[0] == 2) {
    console["log"](arr[1] * 4000);
  }
  if (arr[0] == 3) {
    console["log"](arr[1] * 3000);
  }
  if (arr[0] == 4) {
    console.log(arr[1] * 2000);
  }
}
