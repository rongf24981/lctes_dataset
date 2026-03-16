function __STRING_ARRAY__() {
  var _0x265385 = ["shift", "162zNwPNi", "2308LlUDvn", "39170lSOXUH", "48zRwrKL", "floor", "utf8", "9cEsKhV", "649euRNGu", "567161WPpxLB", "13phtOXR", "map", "readFileSync", "push", "2261292jHlxBa", "trim", "3579636bDrlMY", "5085JqfGFw", "log", "4537376juVsEm", "/dev/stdin", "11443PKhrMT", "apply"];
  __STRING_ARRAY__ = function () {
    return _0x265385;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("11443PKhrMT") / 1 * (parseInt("162zNwPNi") / 2) + parseInt("2261292jHlxBa") / 3 + parseInt("2308LlUDvn") / 4 * (parseInt("5085JqfGFw") / 5) + -parseInt("48zRwrKL") / 6 * (parseInt("567161WPpxLB") / 7) + -parseInt("4537376juVsEm") / 8 * (-parseInt("9cEsKhV") / 9) + -parseInt("39170lSOXUH") / 10 * (-parseInt("649euRNGu") / 11) + parseInt("3579636bDrlMY") / 12 * (parseInt("13phtOXR") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 862084);
function F1(m, b, c) {
  var sum = 0;
  for (var i = 0; i < Y; i++) {
    sum += Math["floor"](m * b);
    m -= c;
  }
  return m + sum;
}
function F2(m, b, c) {
  for (var i = 0; i < Y; i++) {
    m += Math.floor(m * b) - c;
  }
  return m;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __DECODE_0__(vvuhia, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 122;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vvuhia, key);
}
var M = Arr.shift() - 0;
for (var i = 0; i < M; i++) {
  var money = Arr["shift"]() - 0;
  var Y = Arr["shift"]() - 0;
  var N = Arr["shift"]() - 0;
  var arr = [];
  for (var j = 0; j < N; j++) {
    var D = Arr.shift().split(" ")["map"](Number);
    if (D[0] == 0) {
      arr["push"](F1(money, D[1], D[2]));
    }
    if (D[0] == 1) {
      arr.push(F2(money, D[1], D[2]));
    }
  }
  console["log"](Math.max["apply"](null, arr));
}
