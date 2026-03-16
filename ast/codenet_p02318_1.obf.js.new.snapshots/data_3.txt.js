(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("183qupjSx") / 1 * (-parseInt("2026ATUTyq") / 2) + -parseInt("2472975tZlOBd") / 3 + -parseInt("1211404elkFYF") / 4 + parseInt("65nmyVYD") / 5 * (-parseInt("124116XIKYlH") / 6) + parseInt("7TuzMHF") / 7 * (-parseInt("9228312fyRomv") / 8) + parseInt("666kEAjPF") / 9 * (parseInt("211210nLakqC") / 10) + parseInt("6369RuYtvw") / 11 * (parseInt("36804nvURWl") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 974493);
function LD(a, b) {
  var ar = new Array();
  for (var i = 0; i < a["length"] + 1; i++) {
    var subar = new Array();
    for (var j = 0; j < b["length"] + 1; j++) {
      subar["push"](0);
    }
    ar["push"](subar);
  }
  for (var i = 0; i < a.length + 1; i++) {
    ar[i][0] = i;
  }
  for (var i = 0; i < b["length"] + 1; i++) {
    ar[0][i] = i;
  }
  for (var i = 1; i < a.length + 1; i++) {
    for (var j = 1; j < b["length"] + 1; j++) {
      if (a.charAt(i - 1) == b["charAt"](j - 1)) {
        ar[i][j] = Math["min"](ar[i - 1][j] + 1, ar[i][j - 1] + 1, ar[i - 1][j - 1]);
      } else {
        ar[i][j] = Math.min(ar[i - 1][j] + 1, ar[i][j - 1] + 1, ar[i - 1][j - 1] + 1);
      }
    }
  }
  return ar[a["length"]][b.length];
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(xakfaT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 314;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xakfaT, key);
}
var strings = input.split("\n");
function __STRING_ARRAY__() {
  var _0x24bdaf = ["6369RuYtvw", "min", "183qupjSx", "2472975tZlOBd", "charAt", "65nmyVYD", "utf8", "124116XIKYlH", "push", "666kEAjPF", "2026ATUTyq", "7TuzMHF", "36804nvURWl", "1211404elkFYF", "211210nLakqC", "/dev/stdin", "length", "log", "9228312fyRomv"];
  __STRING_ARRAY__ = function () {
    return _0x24bdaf;
  };
  return __STRING_ARRAY__();
}
console["log"](LD(strings[0], strings[1]));
