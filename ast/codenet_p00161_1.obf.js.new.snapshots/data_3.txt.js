function __STRING_ARRAY__() {
  var _0x33ad7b = ["8HYehpH", "readFileSync", "50OKoGOo", "80uOXVKQ", "log", "map", "sort", "/dev/stdin", "shift", "1562589nsADxA", "1492505eBnrso", "61860tIJNFJ", "length", "split", "50610rVvqAv", "2030DtEdJw", "1193687axzhBo", "push", "48UPGSPn", "trim", "15418728ogNAla", "558tRwuMc"];
  __STRING_ARRAY__ = function () {
    return _0x33ad7b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("558tRwuMc") / 1 * (-parseInt("2030DtEdJw") / 2) + -parseInt("61860tIJNFJ") / 3 * (-parseInt("80uOXVKQ") / 4) + parseInt("50610rVvqAv") / 5 * (parseInt("48UPGSPn") / 6) + -parseInt("1492505eBnrso") / 7 * (-parseInt("8HYehpH") / 8) + -parseInt("1562589nsADxA") / 9 + parseInt("50OKoGOo") / 10 * (parseInt("1193687axzhBo") / 11) + -parseInt("15418728ogNAla") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 357031);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(bZgbOZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 216;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bZgbOZ, key);
}
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var team = [];
  for (var i = 0; i < n; i++) {
    var arr = Arr["shift"]()["split"](" ")["map"](Number);
    var a = arr[1] * 60 + arr[2];
    var b = arr[3] * 60 + arr[4];
    var c = arr[5] * 60 + arr[6];
    var d = arr[7] * 60 + arr[8];
    team["push"]([arr[0], a + b + c + d]);
  }
  team["sort"](function (a, b) {
    a = a[1];
    b = b[1];
    return a - b;
  });
  console["log"](team[0][0]);
  console["log"](team[1][0]);
  console["log"](team[team["length"] - 2][0]);
}
