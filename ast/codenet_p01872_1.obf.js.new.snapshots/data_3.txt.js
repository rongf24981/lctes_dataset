function __DECODE_0__(JnvqXb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 118;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JnvqXb, key);
}
function __STRING_ARRAY__() {
  var _0x932d7a = ["6zSnnrc", "trim", "split", "readFileSync", "length", "22035672CaeYsT", "2747040UEPqgt", "12267304Apuycs", "1349505bIhdRO", "replace", "69155QheOcI", "72ytbIJZ", "413450yrXCyT", "reverse", "utf8", "log", "MULTIPLE", "/dev/stdin", "6925373onYmhX", "map"];
  __STRING_ARRAY__ = function () {
    return _0x932d7a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("413450yrXCyT") / 1 + parseInt("2747040UEPqgt") / 2 + -parseInt("1349505bIhdRO") / 3 + -parseInt("72ytbIJZ") / 4 * (-parseInt("69155QheOcI") / 5) + parseInt("6zSnnrc") / 6 * (parseInt("6925373onYmhX") / 7) + parseInt("12267304Apuycs") / 8 + -parseInt("22035672CaeYsT") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 833537);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var str = input["trim"]();
var ans = "";
for (var j = 0; j <= 9; j++) {
  var arr = str["replace"](/\?/, j)["split"]("")["map"](Number)["reverse"]();
  var sum = 0;
  for (var i = 1; i <= 6; i++) {
    sum += arr[i] * (i + 1);
  }
  for (var i = 7; i <= 11; i++) {
    sum += arr[i] * (i - 5);
  }
  var p = 11 - sum % 11;
  if (sum % 11 <= 1) {
    p = 0;
  }
  ans += p == arr[0] ? j : "";
}
if (ans["length"] == 1) {
  console["log"](ans[0]);
} else {
  console["log"]("MULTIPLE");
}
