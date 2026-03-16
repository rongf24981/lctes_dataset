(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3727HtqECq") / 1 * (parseInt("506tHuQZy") / 2) + parseInt("1709226uRnygq") / 3 + -parseInt("4509044AXMvyN") / 4 + -parseInt("2274020WuggGx") / 5 + parseInt("2411088xZLApY") / 6 + parseInt("618667vQMnnF") / 7 * (parseInt("32YIfSDx") / 8) + -parseInt("4356XwZEts") / 9 * (-parseInt("710WDwFCS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 720344);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x529e3f = ["710WDwFCS", "/dev/stdin", "506tHuQZy", "32YIfSDx", "1709226uRnygq", "log", "618667vQMnnF", "split", "4509044AXMvyN", "map", "2411088xZLApY", "2274020WuggGx", "slice", "4356XwZEts", "3727HtqECq", "readFileSync", "0 0 0", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x529e3f;
  };
  return __STRING_ARRAY__();
}
var arr = input.trim()["split"]("\n");
function __DECODE_0__(WyOGHP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 398;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WyOGHP, key);
}
while (true) {
  var tdl = arr[0];
  if (tdl == "0 0 0") {
    break;
  }
  var [t, d, l] = tdl["split"](" ")["map"](Number);
  var cnt = 0;
  var time = 0;
  for (var i = 0; i < t; i++) {
    if (time != 0) {
      cnt++;
    }
    if (time > 0) {
      time--;
    }
    var x = arr[i + 1] - 0;
    if (x >= l) {
      time = d;
    }
  }
  console["log"](cnt);
  arr = arr["slice"](t + 1);
}
