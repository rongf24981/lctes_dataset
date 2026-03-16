(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("688045qJnKKL") / 1 + parseInt("414214CZiOvQ") / 2 * (parseInt("15DEcLmO") / 3) + parseInt("4kAmZjT") / 4 * (-parseInt("5991590osjKLE") / 5) + parseInt("6RAUGrj") / 6 * (parseInt("1856953WkZCGx") / 7) + -parseInt("3374976PKpVyx") / 8 + parseInt("17523EWamaw") / 9 * (-parseInt("4930bGcoxv") / 10) + parseInt("28256547QEvSip") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 601485);
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
function __DECODE_0__(IGaZYb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 229;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGaZYb, key);
}
l = inp["shift"]()["split"](" ");
N = l[0];
K = l[1];
A = inp["shift"]().split(" ");
function __STRING_ARRAY__() {
  var _0x15e966 = ["utf8", "17523EWamaw", "4930bGcoxv", "5991590osjKLE", "6RAUGrj", "keys", "readFileSync", "split", "414214CZiOvQ", "3374976PKpVyx", "28256547QEvSip", "log", "length", "sort", "688045qJnKKL", "/dev/stdin", "1856953WkZCGx", "4kAmZjT", "15DEcLmO", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x15e966;
  };
  return __STRING_ARRAY__();
}
o = {};
a = [];
for (i = 0; i < N; i++) {
  a[A[i]] = (a[A[i]] || 0) + 1;
  o[A[i]] = 1;
}
keys = Object["keys"](o);
c = keys["length"] - K;
if (c > 0) {
  a["sort"]();
  cnt = 0;
  for (k of a) {
    cnt += k;
    c--;
    if (c === 0) {
      break;
    }
  }
  console["log"](cnt);
} else {
  console["log"](0);
}
