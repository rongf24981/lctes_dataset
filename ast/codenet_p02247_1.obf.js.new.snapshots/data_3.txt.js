(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1bqeJij") / 1 * (-parseInt("556246ULSUKg") / 2) + -parseInt("111ypwzQX") / 3 * (parseInt("49228bCArEg") / 4) + -parseInt("745RrtlGI") / 5 * (-parseInt("18096krNgxG") / 6) + parseInt("1919099FpIgpW") / 7 + parseInt("8ZMzkSY") / 8 * (parseInt("1510911ExHaGY") / 9) + -parseInt("20wSClXE") / 10 * (-parseInt("382921NwVerK") / 11) + parseInt("1415316qumSeP") / 12 * (-parseInt("52JyzfnO") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 312034);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(oljdey, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 493;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oljdey, key);
}
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0xafeae0 = ["lastIndex", "1bqeJij", "log", "1510911ExHaGY", "111ypwzQX", "push", "1415316qumSeP", "/dev/stdin", "382921NwVerK", "test", "52JyzfnO", "20wSClXE", "trim", "18096krNgxG", "length", "745RrtlGI", "utf8", "8ZMzkSY", "split", "readFileSync", "556246ULSUKg", "49228bCArEg", "1919099FpIgpW"];
  __STRING_ARRAY__ = function () {
    return _0xafeae0;
  };
  return __STRING_ARRAY__();
}
var a = arr[0];
var b = arr[1];
var len = b["length"] - 1;
var reg = new RegExp(b, "g");
var ans = [];
while (reg["test"](a)) {
  reg.lastIndex -= len;
  ans["push"](reg["lastIndex"] - 1);
}
if (ans["length"] != 0) {
  console["log"](ans.join("\n"));
}
