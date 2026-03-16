(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5517cIAoTB") / 1 * (parseInt("14FPzXZA") / 2) + parseInt("98715pFEJpu") / 3 + -parseInt("11244CSWqRK") / 4 * (parseInt("310sqpZGL") / 5) + -parseInt("86286pxuFmC") / 6 + parseInt("7PtcZBf") / 7 * (-parseInt("833624OCQXoR") / 8) + parseInt("997434HAVuCz") / 9 * (parseInt("20iMjMPv") / 10) + parseInt("2286009OgEOXE") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 130891);
function move(x, arr) {
  var d1 = arr[0];
  var d2 = arr[1];
  var d3 = arr[2];
  var d4 = arr[3];
  var d5 = arr[4];
  var d6 = arr[5];
  var after = [];
  if (x == "N") {
    after = [d2, d6, d3, d4, d1, d5];
  }
  if (x == "S") {
    after = [d5, d1, d3, d4, d6, d2];
  }
  if (x == "E") {
    after = [d4, d2, d1, d6, d5, d3];
  }
  if (x == "W") {
    after = [d3, d2, d6, d1, d5, d4];
  }
  return after;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(icIoBX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 309;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(icIoBX, key);
}
var Arr = input["trim"]()["split"]("\n");
var diceA = Arr[0]["split"](" ").map(Number);
var diceB = Arr[1]["split"](" ")["map"](Number);
var NSEW = "NSEW".split("");
for (var i = 0; i < 100; i++) {
  var r = Math["floor"](Math["random"]() * 4);
  diceA = move(NSEW[r], diceA);
  var flag = diceA["every"](function (v, i) {
    return v == diceB[i];
  });
  if (flag) {
    break;
  }
}
console["log"](flag ? "Yes" : "No");
function __STRING_ARRAY__() {
  var _0x407537 = ["2286009OgEOXE", "log", "310sqpZGL", "NSEW", "floor", "11244CSWqRK", "split", "Yes", "every", "5517cIAoTB", "trim", "14FPzXZA", "20iMjMPv", "86286pxuFmC", "98715pFEJpu", "random", "/dev/stdin", "7PtcZBf", "readFileSync", "833624OCQXoR", "997434HAVuCz", "map"];
  __STRING_ARRAY__ = function () {
    return _0x407537;
  };
  return __STRING_ARRAY__();
}
