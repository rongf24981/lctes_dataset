function __DECODE_0__(KBbUpf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 424;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KBbUpf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("732257mMHabd") / 1 + parseInt("695514lNVBDB") / 2 + -parseInt("4059emyTEo") / 3 * (parseInt("32cbNZBi") / 4) + -parseInt("3462795EgHLRP") / 5 + parseInt("2730858OyUqkw") / 6 + -parseInt("30730Qtwbyx") / 7 + parseInt("8eacDWW") / 8 * (parseInt("12492315RwoKij") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 750905);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
var abc = [];
function __STRING_ARRAY__() {
  var _0x448477 = ["length", "12492315RwoKij", "30730Qtwbyx", "reduce", "4059emyTEo", "32cbNZBi", "trim", "utf8", "ABCD", "log", "0 0", "indexOf", "695514lNVBDB", "732257mMHabd", "8eacDWW", "map", "split", "2730858OyUqkw", "max", "3462795EgHLRP"];
  __STRING_ARRAY__ = function () {
    return _0x448477;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < Arr["length"]; i++) {
  if (abc.length == 0 && Arr[i] == "0 0") {
    break;
  }
  if (abc["length"] == 4) {
    var max = abc["reduce"](function (a, b) {
      return Math["max"](a, b);
    });
    var ABC = "ABCD".split("");
    var str = ABC[abc["indexOf"](max)];
    console["log"](str + " " + max);
    abc = [];
  } else {
    var arr = Arr[i]["split"](" ")["map"](Number);
    abc.push(arr[0] + arr[1]);
  }
}
