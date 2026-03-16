function __STRING_ARRAY__() {
  var _0x15e702 = ["utf8", "1835880mFUnhk", "log", "1382074pwxuWh", "3ohjFKD", "11pNVsQD", "5498110xEyzZg", "split", "144raQfZE", "trim", "filter", "4473372VUVsNe", "readFileSync", "/dev/stdin", "640773lqWbCK", "9euOEae", "5865aPHfTQ", "599805LprfWp", "48HgiZCU"];
  __STRING_ARRAY__ = function () {
    return _0x15e702;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("599805LprfWp") / 1 + parseInt("1382074pwxuWh") / 2 * (parseInt("3ohjFKD") / 3) + -parseInt("144raQfZE") / 4 * (parseInt("5865aPHfTQ") / 5) + parseInt("48HgiZCU") / 6 * (-parseInt("640773lqWbCK") / 7) + parseInt("1835880mFUnhk") / 8 * (parseInt("9euOEae") / 9) + parseInt("5498110xEyzZg") / 10 * (parseInt("11pNVsQD") / 11) + parseInt("4473372VUVsNe") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 468769);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input["trim"]().split("\n");
function __DECODE_0__(ayFpfO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 413;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ayFpfO, key);
}
var ret = lines["filter"](function (line) {
  var items = line["split"](",");
  var w = +items[1];
  var h = +items[2];
  return w / (h * h) >= 25;
});
ret.forEach(function (line) {
  console["log"](line["split"](",")[0]);
});
