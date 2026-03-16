function __STRING_ARRAY__() {
  var _0x3233d6 = ["183939jbhkGb", "2518928sNXLFa", "5399397zzYTCT", "log", "13560kNVlrM", "287532pgzbiH", "1638770KOTzpy", "readFileSync", "utf8", "shift", "/dev/stdin", "length", "map", "852BjBMmA", "10GIZacW", "split", "586cbIHLx", "497DJMdGQ", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x3233d6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("586cbIHLx") / 1 * (-parseInt("852BjBMmA") / 2) + parseInt("183939jbhkGb") / 3 + -parseInt("287532pgzbiH") / 4 + -parseInt("1638770KOTzpy") / 5 + parseInt("13560kNVlrM") / 6 * (-parseInt("497DJMdGQ") / 7) + parseInt("2518928sNXLFa") / 8 + -parseInt("5399397zzYTCT") / 9 * (-parseInt("10GIZacW") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 166379);
function __DECODE_0__(KLYVWr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 444;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KLYVWr, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var NM = Arr["shift"]();
  if (NM == "0 0") {
    break;
  }
  var nm = NM["split"](" ")["map"](Number);
  var m = nm[1];
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  arr.sort(function (a, b) {
    return b - a;
  });
  var sum = 0;
  for (var i = 0; i < arr["length"]; i++) {
    if ((i + 1) % m != 0) {
      sum += arr[i];
    }
  }
  console["log"](sum);
}
