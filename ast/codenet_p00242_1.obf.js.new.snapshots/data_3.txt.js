function __DECODE_0__(aLaAky, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 398;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aLaAky, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("54gtObXU") / 1 * (-parseInt("16922KcfXLX") / 2) + -parseInt("477216avZtiB") / 3 + -parseInt("92044slbKoP") / 4 * (parseInt("195HqHGFi") / 5) + parseInt("1816740EhCGBB") / 6 * (-parseInt("7uytriV") / 7) + -parseInt("8ZqhOfJ") / 8 * (parseInt("9643383fHvDNe") / 9) + parseInt("5717590hrYpLC") / 10 + parseInt("32259051aLMcuO") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 616728);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.replace(/\n$/, "")["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var str = "";
  for (var i = 0; i < n; i++) {
    str += Arr.shift() + " ";
  }
  var arr = str["trim"]()["split"](" ");
  var s = Arr["shift"]();
  var f = arr["filter"](function (v) {
    return v[0] == s;
  });
  f.sort();
  var F = [];
  var memo = "";
  for (var i = 0; i < f["length"]; i++) {
    if (memo == f[i]) {
      F[F["length"] - 1] = [f[i], F[F["length"] - 1][1] + 1];
    } else {
      F.push([f[i], 1]);
      memo = f[i];
    }
  }
  F["sort"](function (a, b) {
    if (a[1] == b[1]) {
      return a[0] > b[0];
    } else {
      return b[1] - a[1];
    }
  });
  var ans = [];
  for (var i = 0; i < 5; i++) {
    if (F["length"] > i) {
      ans["push"](F[i][0]);
    }
  }
  console["log"](ans["length"] > 0 ? ans["join"](" ") : "NA");
}
function __STRING_ARRAY__() {
  var _0x1a902e = ["push", "477216avZtiB", "join", "sort", "1816740EhCGBB", "utf8", "9643383fHvDNe", "5717590hrYpLC", "readFileSync", "7uytriV", "16922KcfXLX", "92044slbKoP", "195HqHGFi", "8ZqhOfJ", "log", "split", "filter", "trim", "shift", "length", "32259051aLMcuO", "54gtObXU"];
  __STRING_ARRAY__ = function () {
    return _0x1a902e;
  };
  return __STRING_ARRAY__();
}
