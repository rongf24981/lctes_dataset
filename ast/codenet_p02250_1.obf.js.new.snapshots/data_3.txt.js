(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1kwkMBt") / 1 * (parseInt("2128596PQhrfb") / 2) + -parseInt("15765IYpeeJ") / 3 * (parseInt("176zSsMUm") / 4) + parseInt("7159790RFjupq") / 5 + -parseInt("4541532gjOVXo") / 6 + -parseInt("52381cCpSGG") / 7 * (-parseInt("24ABecMZ") / 8) + -parseInt("7054155WkeyCR") / 9 * (parseInt("20GgDfRW") / 10) + parseInt("715ciijVc") / 11 * (parseInt("583104urHDrm") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 992857);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var str = arr[0];
var n = arr[1] - 0 + 2;
var ans = "";
function __DECODE_0__(ktFpLJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 257;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ktFpLJ, key);
}
for (var i = 2; i < n; i++) {
  ans += (str["includes"](arr[i]) ? 1 : 0) + "\n";
}
function __STRING_ARRAY__() {
  var _0x2a57a0 = ["trim", "20GgDfRW", "176zSsMUm", "52381cCpSGG", "715ciijVc", "split", "/dev/stdin", "1kwkMBt", "15765IYpeeJ", "includes", "utf8", "24ABecMZ", "4541532gjOVXo", "7159790RFjupq", "7054155WkeyCR", "log", "2128596PQhrfb", "583104urHDrm", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x2a57a0;
  };
  return __STRING_ARRAY__();
}
console["log"](ans["trim"]());
