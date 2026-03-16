(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("14871XtbeAM") / 1 * (parseInt("98sFnMLo") / 2) + -parseInt("2144139TXSmwQ") / 3 + -parseInt("8vlPnou") / 4 * (-parseInt("756970SdlGWl") / 5) + -parseInt("449400SGhmFP") / 6 * (-parseInt("77jVHMDr") / 7) + -parseInt("1208RavYkQ") / 8 * (-parseInt("819DFrntI") / 9) + parseInt("3214620uJeeZg") / 10 + parseInt("4629834hZrApa") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 439393);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(xnRxGe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 285;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xnRxGe, key);
}
var arr = input.trim().split("\n");
while (true) {
  var str = arr["shift"]();
  if (str == "0 0") {
    break;
  }
  var ary = str["split"](" ")["map"](Number);
  var h = [];
  var w = [];
  for (var i = 0; i < ary[0]; i++) {
    h["push"](arr["shift"]() - 0);
  }
  for (var i = 0; i < ary[1]; i++) {
    w.push(arr["shift"]() - 0);
  }
  var H = {};
  for (var i = 0; i < h["length"]; i++) {
    var sum = 0;
    for (var j = i; j < h.length; j++) {
      if (j != i) {
        sum += h[j];
      }
      if (H["hasOwnProperty"](h[i] + sum)) {
        H[h[i] + sum]++;
      } else {
        H[h[i] + sum] = 1;
      }
    }
  }
  var W = {};
  for (var i = 0; i < w.length; i++) {
    var sum = 0;
    for (var j = i; j < w["length"]; j++) {
      if (j != i) {
        sum += w[j];
      }
      if (W["hasOwnProperty"](w[i] + sum)) {
        W[w[i] + sum]++;
      } else {
        W[w[i] + sum] = 1;
      }
    }
  }
  var cnt = 0;
  for (var k in H) {
    if (W["hasOwnProperty"](k)) {
      cnt += H[k] * W[k];
    }
  }
  console["log"](cnt);
}
function __STRING_ARRAY__() {
  var _0x3d5628 = ["1208RavYkQ", "push", "14871XtbeAM", "/dev/stdin", "449400SGhmFP", "4629834hZrApa", "0 0", "shift", "756970SdlGWl", "log", "map", "hasOwnProperty", "98sFnMLo", "3214620uJeeZg", "readFileSync", "length", "split", "77jVHMDr", "8vlPnou", "utf8", "819DFrntI", "2144139TXSmwQ"];
  __STRING_ARRAY__ = function () {
    return _0x3d5628;
  };
  return __STRING_ARRAY__();
}
