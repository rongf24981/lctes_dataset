(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("20266imWkJa") / 1 * (parseInt("70NUCqjN") / 2) + -parseInt("154113CUhAvR") / 3 * (-parseInt("52VtvMDl") / 4) + parseInt("5YJNsSN") / 5 * (parseInt("2266674JzhRYf") / 6) + parseInt("8643124siaued") / 7 + -parseInt("5387296tJEYpj") / 8 * (-parseInt("18tuIOuC") / 9) + parseInt("14015170asSktQ") / 10 + -parseInt("54596916BbiWqa") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 774629);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x7d39f1 = ["filter", "split", "/dev/stdin", "5387296tJEYpj", "5YJNsSN", "log", "14015170asSktQ", "shift", "20266imWkJa", "8643124siaued", "length", "utf8", "54596916BbiWqa", "2266674JzhRYf", "18tuIOuC", "52VtvMDl", "154113CUhAvR", "70NUCqjN", "push", "slice", "map"];
  __STRING_ARRAY__ = function () {
    return _0x7d39f1;
  };
  return __STRING_ARRAY__();
}
var arr = input.trim()["split"]("\n");
function __DECODE_0__(alBBiF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 314;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(alBBiF, key);
}
while (true) {
  var n = arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var nww = [];
  for (var i = 0; i < n; i++) {
    nww[i] = arr["shift"]()["split"](" ");
  }
  nww = nww["map"](v => [v[0], v[1] - 0, v[2] - 0]);
  var max = 0;
  var ans = [];
  function bomb(arrA, arrB, sum, g) {
    if (arrB["length"] == 0) {
      if (max < g / sum) {
        ans = arrA;
        max = g / sum;
      }
      return;
    }
    arrB.forEach(v => {
      if (sum <= nww[v][2]) {
        var a = arrA.concat(v);
        var b = arrB["slice"]()["filter"](n => v != n);
        var c = sum + nww[v][1];
        var d = g + nww[v][1] * (arrA["length"] + 1);
        bomb(a, b, c, d);
      }
    });
  }
  var bombArr = [];
  for (var i = 0; i < n; i++) {
    bombArr["push"](i);
  }
  bomb([], bombArr, 0, 0);
  console["log"](ans["map"](v => nww[v][0]).reverse().join("\n"));
}
