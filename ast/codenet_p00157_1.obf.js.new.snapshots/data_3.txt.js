(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("169078YPGaVH") / 1 + parseInt("1155124YTrCqH") / 2 + -parseInt("9XVdIIw") / 3 * (-parseInt("233972BHteuF") / 4) + parseInt("3105595VyLFdY") / 5 + parseInt("285576qiAMCF") / 6 * (-parseInt("77KtCGXK") / 7) + -parseInt("8esnStN") / 8 * (parseInt("1005705KcWjgc") / 9) + -parseInt("710QLmlly") / 10 * (parseInt("34991QeLOIR") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 343930);
function Longest() {
  ary["sort"](function (a, b) {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  var A = ary["filter"](function (v, i) {
    if (i == 0) {
      return true;
    } else if (ary[i - 1][0] != v[0]) {
      return true;
    }
  });
  A = A["map"](function (v) {
    return v[1];
  });
  var L = [];
  L[0] = A[0];
  var length = 1;
  for (var i = 1; i < A["length"]; i++) {
    if (L[length - 1] < A[i]) {
      L[length++] = A[i];
    } else {
      for (var j = 0; j < length; j++) {
        if (L[j] >= A[i]) {
          L[j] = A[i];
          break;
        }
      }
    }
  }
  return length;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(yrpClL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 143;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yrpClL, key);
}
var arr = input["trim"]().split("\n");
function __STRING_ARRAY__() {
  var _0x592e26 = ["285576qiAMCF", "233972BHteuF", "sort", "169078YPGaVH", "filter", "710QLmlly", "9XVdIIw", "trim", "34991QeLOIR", "77KtCGXK", "8esnStN", "1005705KcWjgc", "readFileSync", "3105595VyLFdY", "length", "map", "1155124YTrCqH", "utf8", "/dev/stdin", "shift", "split", "max", "log"];
  __STRING_ARRAY__ = function () {
    return _0x592e26;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var ary = [];
  for (var i = 0; i < n; i++) {
    ary.push(arr["shift"]()["split"](" ")["map"](Number));
  }
  var m = arr.shift() - 0;
  for (var i = 0; i < m; i++) {
    ary.push(arr["shift"]()["split"](" ")["map"](Number));
  }
  var R = Longest();
  ary = ary.map(function (v) {
    return [v[1], v[0]];
  });
  var H = Longest();
  console["log"](Math["max"](R, H));
}
