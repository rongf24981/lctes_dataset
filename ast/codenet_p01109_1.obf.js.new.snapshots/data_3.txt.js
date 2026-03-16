(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("383661fpmByF") / 1 + -parseInt("908PmojRd") / 2 * (-parseInt("1731FEwtyS") / 3) + parseInt("158176fCXKtM") / 4 * (-parseInt("105mrkOXU") / 5) + -parseInt("1565868Gbgmgs") / 6 + -parseInt("960876sECYPC") / 7 + parseInt("5409712XswTcu") / 8 + parseInt("10263366JAojOo") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 466215);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(LrgZFL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 233;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LrgZFL, key);
}
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x4821f9 = ["158176fCXKtM", "10263366JAojOo", "105mrkOXU", "shift", "1565868Gbgmgs", "960876sECYPC", "log", "trim", "908PmojRd", "filter", "readFileSync", "1731FEwtyS", "split", "5409712XswTcu", "/dev/stdin", "reduce", "383661fpmByF"];
  __STRING_ARRAY__ = function () {
    return _0x4821f9;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var a = arr.shift()["split"](" ").map(Number);
  var sum = a["reduce"]((a, b) => a + b);
  console["log"](a["filter"](v => v <= sum / n).length);
}
