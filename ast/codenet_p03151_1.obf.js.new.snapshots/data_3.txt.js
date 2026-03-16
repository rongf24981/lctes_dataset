(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("208104gtOmTq") / 1 + parseInt("326728tbaYha") / 2 + parseInt("3kQDykH") / 3 * (parseInt("615108uquiYs") / 4) + parseInt("1588575FdJNFy") / 5 + -parseInt("78OTLCfL") / 6 * (parseInt("69377ResbGt") / 7) + -parseInt("8dpBtmF") / 8 * (-parseInt("2950407hQOlfY") / 9) + -parseInt("38660Jmifqb") / 10 * (parseInt("1298TFeKrf") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 169544);
function __STRING_ARRAY__() {
  var _0x2999bc = ["2950407hQOlfY", "615108uquiYs", "8dpBtmF", "shift", "326728tbaYha", "208104gtOmTq", "78OTLCfL", "1298TFeKrf", "38660Jmifqb", "3kQDykH", "1588575FdJNFy", "69377ResbGt", "readFileSync", "sort", "utf8", "split", "log", "push"];
  __STRING_ARRAY__ = function () {
    return _0x2999bc;
  };
  return __STRING_ARRAY__();
}
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
N = inp["shift"]() * 1;
A = inp["shift"]().split(" ");
function __DECODE_0__(UzHqIW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 108;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UzHqIW, key);
}
B = inp["shift"]()["split"](" ");
sumA = 0;
sumB = 0;
s = 0;
t = [];
cnt = 0;
for (i = 0; i < N; i++) {
  a = A[i] * 1;
  b = B[i] * 1;
  d = a - b;
  if (d < 0) {
    cnt++;
    s += d;
  } else {
    t["push"](d);
  }
  sumA += a;
  sumB += b;
}
if (sumA >= sumB) {
  t["sort"]((a, b) => b - a);
  j = 0;
  while (s < 0) {
    s += t[j];
    j++;
  }
  console["log"](cnt + j);
} else {
  console["log"](-1);
}
