function __STRING_ARRAY__() {
  var _0x9d33f9 = ["976sUlgLh", "split", "6yOCAGW", "2599509pYxNiJ", "72iLqYqV", "7917iyWBIN", "5187yFwOTz", "1GsZhfL", "map", "19944WFHdWn", "utf8", "129409jmTJPn", "255410oVFnig", "855ipnYKB", "/dev/stdin", "forEach", "log", "59550RiRcgm", "391735YRnReU", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x9d33f9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1GsZhfL") / 1 * (parseInt("255410oVFnig") / 2) + parseInt("7917iyWBIN") / 3 * (-parseInt("976sUlgLh") / 4) + -parseInt("391735YRnReU") / 5 * (-parseInt("6yOCAGW") / 6) + -parseInt("129409jmTJPn") / 7 * (parseInt("72iLqYqV") / 8) + -parseInt("855ipnYKB") / 9 * (-parseInt("59550RiRcgm") / 10) + -parseInt("2599509pYxNiJ") / 11 + -parseInt("19944WFHdWn") / 12 * (-parseInt("5187yFwOTz") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 388297);
function __DECODE_0__(wKugxg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 492;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wKugxg, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.replace(/\n$/, "")["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  var sum = 0;
  var flag = false;
  arr["forEach"](function (v) {
    if (v != 0) {
      sum += 1;
    }
    if (v >= 2) {
      flag = true;
    }
  });
  console["log"](flag ? sum + 1 : "NA");
}
