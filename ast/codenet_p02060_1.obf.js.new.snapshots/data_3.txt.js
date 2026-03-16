(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2rugsqS") / 1 * (-parseInt("1168862RtiShD") / 2) + -parseInt("2267997mqTivF") / 3 + -parseInt("4253972cgdFfR") / 4 + -parseInt("15GUoKXP") / 5 * (parseInt("402726xaFoky") / 6) + -parseInt("8037064gPRdIj") / 7 + -parseInt("5760sgFSLI") / 8 * (-parseInt("1359RyQwgS") / 9) + parseInt("25193830ljjgOz") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 627958);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var p = arr["shift"]()["split"](" ")["map"](Number);
var t = arr["shift"]().split(" ").map(Number);
var s = [];
for (var i = 0; i <= 200; i++) {
  s[i] = Infinity;
}
s[0] = 0;
for (var i = 0; i <= 100; i++) {
  if (s[i] == Infinity) {
    continue;
  }
  s[i + t[0]] = Math["min"](s[i] + p[0], s[i + t[0]]);
  s[i + t[1]] = Math.min(s[i] + p[1], s[i + t[1]]);
  s[i + t[2]] = Math["min"](s[i] + p[2], s[i + t[2]]);
  s[i + t[3]] = Math["min"](s[i] + p[3], s[i + t[3]]);
}
var min = Infinity;
for (var i = n; i <= 200; i++) {
  min = Math.min(min, s[i]);
}
console["log"](min);
function __DECODE_0__(usuSlV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 223;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(usuSlV, key);
}
function __STRING_ARRAY__() {
  var _0x556c76 = ["log", "15GUoKXP", "min", "2rugsqS", "5760sgFSLI", "1168862RtiShD", "402726xaFoky", "shift", "trim", "2267997mqTivF", "split", "8037064gPRdIj", "map", "readFileSync", "1359RyQwgS", "25193830ljjgOz", "4253972cgdFfR"];
  __STRING_ARRAY__ = function () {
    return _0x556c76;
  };
  return __STRING_ARRAY__();
}
