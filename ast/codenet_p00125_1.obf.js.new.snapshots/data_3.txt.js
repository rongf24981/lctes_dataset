function __DECODE_0__(OYSYnk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 143;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OYSYnk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("501801TnEQIl") / 1 + -parseInt("14mdADvN") / 2 * (parseInt("4191tKPvWc") / 3) + parseInt("16396kmvrtN") / 4 * (parseInt("425bzgIQa") / 5) + -parseInt("294IzxyAf") / 6 * (-parseInt("69132DBmrIn") / 7) + parseInt("3670504QTUUUN") / 8 + -parseInt("650007HSVyum") / 9 * (-parseInt("10zPBZXX") / 10) + parseInt("1332529yFYaGc") / 11 * (-parseInt("156qhsrOF") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 280590);
function year(x) {
  var m = [365, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (x % 4 == 0) {
    m[2] = 29;
    m[0] = 366;
    if (x % 100 == 0) {
      m[2] = 28;
      m[0] = 365;
    }
    if (x % 400 == 0) {
      m[2] = 29;
      m[0] = 366;
    }
  }
  return m;
}
function __STRING_ARRAY__() {
  var _0x37619d = ["156qhsrOF", "shift", "apply", "14mdADvN", "16396kmvrtN", "69132DBmrIn", "utf8", "1332529yFYaGc", "650007HSVyum", "log", "3670504QTUUUN", "4191tKPvWc", "/dev/stdin", "map", "-1 -1 -1 -1 -1 -1", "10zPBZXX", "501801TnEQIl", "425bzgIQa", "split", "294IzxyAf"];
  __STRING_ARRAY__ = function () {
    return _0x37619d;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
while (true) {
  var str = Arr["shift"]();
  if (str == "-1 -1 -1 -1 -1 -1") {
    break;
  }
  var arr = str["split"](" ")["map"](Number);
  (function (y1, m1, d1, y2, m2, d2) {
    var sum1 = 0;
    var sum2 = 0;
    var Y1 = year(y1);
    var Y2 = year(y2);
    sum1 += Y1[m1] - d1;
    sum2 += Y2[m2] - d2;
    while (m1 < 12) {
      m1++;
      sum1 += Y1[m1];
    }
    while (m2 < 12) {
      m2++;
      sum2 += Y2[m2];
    }
    var days = sum1 - sum2;
    while (y1 != y2) {
      y1++;
      days += year(y1)[0];
    }
    console["log"](days);
  })["apply"](null, arr);
}
