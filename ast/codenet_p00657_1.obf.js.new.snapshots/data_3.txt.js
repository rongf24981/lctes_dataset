(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("806424fYZgZL") / 1 + parseInt("292286BoBmvA") / 2 + -parseInt("2952126chbCFE") / 3 + -parseInt("20WdcdBn") / 4 * (parseInt("1373115jCdPmp") / 5) + -parseInt("7850652hRmSZF") / 6 + parseInt("4221qUYfVR") / 7 * (parseInt("24392YJFXNe") / 8) + parseInt("30758580zgxiDO") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 930287);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
while (true) {
  var rc = Arr["shift"]()["split"](" ").map(Number);
  var r = rc[0];
  var c = rc[1];
  if (r == 0 && c == 0) {
    break;
  }
  console["log"](r % 2 == 1 && c % 2 == 1 ? "no" : "yes");
}
function __DECODE_0__(qiGPLF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 494;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qiGPLF, key);
}
function __STRING_ARRAY__() {
  var _0x197659 = ["30758580zgxiDO", "log", "utf8", "2952126chbCFE", "/dev/stdin", "806424fYZgZL", "4221qUYfVR", "yes", "shift", "readFileSync", "7850652hRmSZF", "292286BoBmvA", "1373115jCdPmp", "20WdcdBn", "split", "24392YJFXNe"];
  __STRING_ARRAY__ = function () {
    return _0x197659;
  };
  return __STRING_ARRAY__();
}
