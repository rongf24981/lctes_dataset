(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("696999GdAErT") / 1 + -parseInt("3601774pAraHG") / 2 + -parseInt("2471853cKalgk") / 3 + parseInt("2069840eBfIuP") / 4 + -parseInt("3791305zKtTIY") / 5 + -parseInt("29496xEDCoJ") / 6 * (-parseInt("1533OrXPGU") / 7) + parseInt("16108672SNOtna") / 8 * (parseInt("9koegZk") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 921548);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x33fc14 = ["29496xEDCoJ", "split", "3601774pAraHG", "utf8", "1533OrXPGU", "log", "9koegZk", "readFileSync", "shift", "max", "toString", "2069840eBfIuP", "696999GdAErT", "map", "2471853cKalgk", "3791305zKtTIY", "/dev/stdin", "16108672SNOtna"];
  __STRING_ARRAY__ = function () {
    return _0x33fc14;
  };
  return __STRING_ARRAY__();
}
var arr = input.trim()["split"]("\n");
var n = arr["shift"]() - 0;
var max = 0;
for (var i = 1; i <= n; i++) {
  var s = (i["toString"](2) + "")["split"]("")["map"](Number);
  var sum = s.reduce((a, b) => a + b);
  max = Math["max"](max, sum);
}
function __DECODE_0__(jwvGka, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 477;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jwvGka, key);
}
console["log"](max);
