(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1ctJTEy") / 1 * (parseInt("472588KZZvcw") / 2) + -parseInt("1554174EdnXVv") / 3 + parseInt("435988jNSfVx") / 4 + -parseInt("3426545Nbodte") / 5 + -parseInt("4566150GVHtTE") / 6 + -parseInt("981568SfxEAU") / 7 + parseInt("17128744QDKWPh") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 381768);
function __DECODE_0__(xgZlWi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 269;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xgZlWi, key);
}
function lcs(x, y) {
  var m = x["length"];
  var n = y["length"];
  for (var i = 1; i <= m; i++) {
    c[i][0] = 0;
  }
  for (var j = 1; j <= n; j++) {
    c[0][j] = 0;
  }
  for (var i = 1; i <= m; i++) {
    for (var j = 1; j <= n; j++) {
      if (x[i] == y[j]) {
        c[i][j] = c[i - 1][j - 1] + 1;
      } else if (c[i - 1][j] >= c[i][j - 1]) {
        c[i][j] = c[i - 1][j];
      } else {
        c[i][j] = c[i][j - 1];
      }
    }
  }
}
var input = require("fs").readFileSync("/dev/stdin", "utf8")["trim"]();
var lines = input["split"]("\n");
var n = +lines["shift"]() - 0;
for (var idx = 0; idx < n; idx++) {
  var a = lines.shift();
  var b = lines.shift();
  var c = [[0]];
  for (var i = 1; i <= a["length"]; i++) {
    var arr = [-1];
    c["push"](arr);
  }
  lcs(a, b);
  console.log(c[a["length"]][b.length]);
}
function __STRING_ARRAY__() {
  var _0x42a8ff = ["split", "push", "shift", "17128744QDKWPh", "435988jNSfVx", "/dev/stdin", "1ctJTEy", "3426545Nbodte", "1554174EdnXVv", "trim", "length", "472588KZZvcw", "4566150GVHtTE", "981568SfxEAU", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x42a8ff;
  };
  return __STRING_ARRAY__();
}
