(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1391AXCHGd") / 1 * (parseInt("764dDvlye") / 2) + parseInt("6abkycL") / 3 * (-parseInt("2035948HdhVbw") / 4) + -parseInt("103020qHCuTr") / 5 + parseInt("2633274ZDqcQI") / 6 + -parseInt("2286627jBovPl") / 7 + -parseInt("120NfmZbu") / 8 * (-parseInt("218565yhuCWu") / 9) + parseInt("230wsEdrl") / 10 * (parseInt("272525DZrFdr") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 539102);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var a = arr["shift"]().split(" ")["map"](Number);
var m = arr["shift"]() - 0;
var b = arr["shift"]()["split"](" ").map(Number);
function __DECODE_0__(pAEQdh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 131;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pAEQdh, key);
}
for (var i = 0; i < m; i++) {
  if (a.length - 1 < i || b[i] > a[i]) {
    console["log"](1);
    break;
  } else if (b[i] < a[i]) {
    console["log"](0);
    break;
  }
}
function __STRING_ARRAY__() {
  var _0x40e40d = ["6abkycL", "log", "/dev/stdin", "764dDvlye", "2633274ZDqcQI", "120NfmZbu", "218565yhuCWu", "230wsEdrl", "2035948HdhVbw", "trim", "split", "readFileSync", "map", "103020qHCuTr", "utf8", "2286627jBovPl", "272525DZrFdr", "1391AXCHGd", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x40e40d;
  };
  return __STRING_ARRAY__();
}
if (i == m) {
  console["log"](0);
}
