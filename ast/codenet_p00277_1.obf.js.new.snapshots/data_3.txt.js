function __STRING_ARRAY__() {
  var _0x4fb53e = ["2111530Ivytyh", "8aRrVNf", "70795egKvTq", "5551dmGbQm", "2LughfA", "236488LKcHfg", "trim", "1388061zxRMsr", "forEach", "split", "shift", "sort", "36SwtgSa", "4854344YsHuMZ", "528357XzCeGu", "4338kcRgzc", "map"];
  __STRING_ARRAY__ = function () {
    return _0x4fb53e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("236488LKcHfg") / 1 + -parseInt("2LughfA") / 2 * (-parseInt("528357XzCeGu") / 3) + -parseInt("36SwtgSa") / 4 * (parseInt("70795egKvTq") / 5) + parseInt("4338kcRgzc") / 6 * (parseInt("5551dmGbQm") / 7) + -parseInt("8aRrVNf") / 8 * (-parseInt("1388061zxRMsr") / 9) + -parseInt("2111530Ivytyh") / 10 + -parseInt("4854344YsHuMZ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 360287);
function __DECODE_0__(tLCRJz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 384;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tLCRJz, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var nrl = arr["shift"]().split(" ")["map"](Number);
var n = nrl[0];
var L = nrl[2];
var t = [];
var max = [0, 0];
var time = 0;
for (var i = 0; i < n; i++) {
  t[i] = [0, 0, i];
}
arr.push([1, L, 0].join(" "));
arr["forEach"](function (v) {
  v = v["split"](" ").map(Number);
  var d = v[0] - 1;
  var T = v[1];
  var x = v[2];
  t[max[0]][1] += T - time;
  time = T;
  t[d][0] += x;
  if (x > 0) {
    if (t[d][0] > max[1]) {
      max = [d, t[d][0]];
    } else if (t[d][0] == max[1] && d <= max[0]) {
      max = [d, t[d][0]];
    }
  }
  if (x < 0) {
    var MAX = 0;
    var m = 0;
    t["forEach"](function (V, index) {
      if (MAX < V[0]) {
        m = index;
      }
    });
    max = [m, t[m][0]];
  }
});
t["sort"](function (a, b) {
  if (a[1] == b[1]) {
    return a[2] - b[2];
  } else {
    return b[1] - a[1];
  }
});
console.log(t[0][2] + 1);
