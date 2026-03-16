(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("453101gkHKiA") / 1 + -parseInt("111510WdRGfB") / 2 * (-parseInt("27wBptRZ") / 3) + parseInt("1400772RxLoPy") / 4 * (-parseInt("5mTHJnp") / 5) + parseInt("6EOPTsr") / 6 * (parseInt("3971303TchgTX") / 7) + parseInt("560TmVTJt") / 8 * (-parseInt("69606XoBhiI") / 9) + -parseInt("57150SRHRoO") / 10 + -parseInt("2177989yikSvQ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 426938);
input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
lines = input.split("\n");
N = lines["shift"]() * 1;
ans = Math.floor(N / 11) * 2;
m = N % 11;
function __STRING_ARRAY__() {
  var _0x2fd87d = ["readFileSync", "log", "27wBptRZ", "69606XoBhiI", "3971303TchgTX", "1400772RxLoPy", "560TmVTJt", "5mTHJnp", "2177989yikSvQ", "111510WdRGfB", "453101gkHKiA", "shift", "6EOPTsr", "utf8", "57150SRHRoO"];
  __STRING_ARRAY__ = function () {
    return _0x2fd87d;
  };
  return __STRING_ARRAY__();
}
if (m == 0) {} else if (m <= 6) {
  ans += 1;
} else {
  ans += 2;
}
function __DECODE_0__(NKGLub, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 259;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NKGLub, key);
}
console["log"](ans);
