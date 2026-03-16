(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("435620sDdRfh") / 1 + -parseInt("10DwyTyv") / 2 * (parseInt("351423GalZGs") / 3) + -parseInt("4ZPkqOX") / 4 * (-parseInt("5140390TewiFx") / 5) + -parseInt("4709046BrAhjf") / 6 + -parseInt("8680322mpSpke") / 7 + parseInt("8rmcPiO") / 8 * (-parseInt("2194767kPqkHZ") / 9) + parseInt("41550mXAzTj") / 10 * (parseInt("7887EyqRic") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 717138);
function __DECODE_0__(yftcGM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 314;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yftcGM, key);
}
function warshall() {
  for (var k = 0; k < n; k++) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        C[i][j] = Math["min"](C[i][j], C[i][k] + C[k][j]);
      }
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x5c8b71 = ["utf8", "split", "readFileSync", "map", "shift", "8rmcPiO", "/dev/stdin", "log", "7887EyqRic", "max", "435620sDdRfh", "41550mXAzTj", "351423GalZGs", "8680322mpSpke", "min", "5140390TewiFx", "2194767kPqkHZ", "4709046BrAhjf", "trim", "4ZPkqOX", "join", "10DwyTyv"];
  __STRING_ARRAY__ = function () {
    return _0x5c8b71;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = 10;
  var m = Arr["shift"]() - 0;
  if (m == 0) {
    break;
  }
  var C = [];
  for (var i = 0; i < n; i++) {
    C[i] = [];
    for (var j = 0; j < n; j++) {
      C[i][j] = i === j ? 0 : Infinity;
    }
  }
  var max = 0;
  for (var i = 0; i < m; i++) {
    var A = Arr["shift"]().split(" ")["map"](Number);
    max = Math["max"](max, A[0], A[1]);
    C[A[0]][A[1]] = A[2];
    C[A[1]][A[0]] = A[2];
  }
  warshall();
  var min = ["", Infinity];
  for (var i = max; i >= 0; i--) {
    var arr = C[i].slice(0, max + 1);
    var sum = arr.reduce(function (a, b) {
      return a + b;
    });
    min[1] = Math.min(min[1], sum);
    if (min[1] == sum) {
      min = [i, sum];
    }
  }
  console["log"](min["join"](" "));
}
