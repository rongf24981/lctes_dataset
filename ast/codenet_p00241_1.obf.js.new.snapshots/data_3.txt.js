function __DECODE_0__(EqSQFf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 479;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EqSQFf, key);
}
function __STRING_ARRAY__() {
  var _0x1e1cb4 = ["4362147qYXGfG", "/dev/stdin", "303216lJtGUL", "1059LhYCRP", "map", "10AIzxCn", "46wQHecE", "67428hINfRF", "shift", "131581lLwtnc", "log", "8548410mcuyZc", "1514586ChcHnq", "split", "42QMzGYF"];
  __STRING_ARRAY__ = function () {
    return _0x1e1cb4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("131581lLwtnc") / 1 + -parseInt("46wQHecE") / 2 * (-parseInt("1059LhYCRP") / 3) + parseInt("67428hINfRF") / 4 + parseInt("10AIzxCn") / 5 * (parseInt("1514586ChcHnq") / 6) + -parseInt("42QMzGYF") / 7 * (-parseInt("303216lJtGUL") / 8) + parseInt("4362147qYXGfG") / 9 + -parseInt("8548410mcuyZc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 255511);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var N = Arr["shift"]() - 0;
  if (N == 0) {
    break;
  }
  for (var I = 0; I < N; I++) {
    var A = Arr["shift"]()["split"](" ")["map"](Number);
    var x1 = A[0];
    var y1 = A[1];
    var z1 = A[2];
    var w1 = A[3];
    var x2 = A[4];
    var y2 = A[5];
    var z2 = A[6];
    var w2 = A[7];
    var a = x1 * x2;
    var i = x1 * y2;
    var j = x1 * z2;
    var k = x1 * w2;
    i += y1 * x2;
    a -= y1 * y2;
    k += y1 * z2;
    j -= y1 * w2;
    j += z1 * x2;
    k -= z1 * y2;
    a -= z1 * z2;
    i += z1 * w2;
    k += w1 * x2;
    j += w1 * y2;
    i -= w1 * z2;
    a -= w1 * w2;
    console["log"](a + " " + i + " " + j + " " + k);
  }
}
