function __STRING_ARRAY__() {
  var _0x575681 = ["2044164TEcRrF", "9RccejL", "2013100FYAkqV", "686042hJjwws", "trim", "map", "split", "71458owAHRm", "14JxIbof", "4510816krljNn", "shift", "log", "/dev/stdin", "8421954OzhIVu", "8SGzvOZ", "11426510UUxLGR"];
  __STRING_ARRAY__ = function () {
    return _0x575681;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IZcchy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 404;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IZcchy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("14JxIbof") / 1 * (parseInt("71458owAHRm") / 2) + -parseInt("2044164TEcRrF") / 3 * (-parseInt("8SGzvOZ") / 4) + -parseInt("2013100FYAkqV") / 5 + -parseInt("8421954OzhIVu") / 6 + parseInt("686042hJjwws") / 7 + -parseInt("4510816krljNn") / 8 + parseInt("9RccejL") / 9 * (parseInt("11426510UUxLGR") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 733508);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n")["map"](Number);
while (true) {
  var n = arr["shift"]();
  if (n == 0) {
    break;
  }
  var max = 0;
  for (var i = 0; i <= 54; i++) {
    for (var j = 0; j <= 96; j++) {
      var sum = i * i * i + j * (j + 1) * (j + 2) / 6;
      if (n >= sum) {
        max = Math.max(max, sum);
      }
    }
  }
  console["log"](max);
}
