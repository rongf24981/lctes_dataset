function __STRING_ARRAY__() {
  var _0x39487a = ["247548WXAVzC", "6736AZTVyt", "length", "1091020ZneXue", "479645mIkTDf", "2ozkVKv", "18hgMrwj", "10050103Zitveg", "9900FsAhHz", "trim", "4096407OyRlYg", "287304zWOSRB", "split", "407AKzIVg", "4LwKiNZ", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x39487a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2ozkVKv") / 1 * (-parseInt("287304zWOSRB") / 2) + parseInt("4096407OyRlYg") / 3 * (parseInt("4LwKiNZ") / 4) + parseInt("479645mIkTDf") / 5 * (parseInt("18hgMrwj") / 6) + -parseInt("10050103Zitveg") / 7 + parseInt("6736AZTVyt") / 8 * (parseInt("9900FsAhHz") / 9) + parseInt("1091020ZneXue") / 10 + -parseInt("407AKzIVg") / 11 * (parseInt("247548WXAVzC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 776860);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(sPtqds, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 212;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sPtqds, key);
}
for (var i = 0; i < Arr["length"]; i = i + 2) {
  var n = Arr[i] - 0;
  var str = Arr[i + 1];
  for (var j = 0; j < n; j++) {
    str = str.replace(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (s) {
      return s["length"] + s[0];
    });
  }
  console.log(str);
  if (Arr[i + 2] == "0") {
    break;
  }
}
