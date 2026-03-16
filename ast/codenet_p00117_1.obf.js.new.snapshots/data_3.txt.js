function __DECODE_0__(rdKvTb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 336;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rdKvTb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("22324AvHhqw") / 1 * (-parseInt("2nxCjEH") / 2) + parseInt("1024689rWNUfV") / 3 * (parseInt("12NxbMHb") / 4) + parseInt("5136320SvYdIn") / 5 + -parseInt("4350732jzemoC") / 6 + parseInt("3986857gVHcJa") / 7 * (-parseInt("8nKpWcr") / 8) + parseInt("8897517qgJQmS") / 9 + parseInt("52730JPsBcP") / 10 * (-parseInt("2563cbAthS") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 539608);
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
var Arr = input.trim()["split"]("\n");
var n = Arr["shift"]() - 0;
var m = Arr["shift"]() - 0;
function __STRING_ARRAY__() {
  var _0x1f01c6 = ["min", "/dev/stdin", "22324AvHhqw", "split", "2563cbAthS", "52730JPsBcP", "map", "3986857gVHcJa", "4350732jzemoC", "shift", "12NxbMHb", "5136320SvYdIn", "8nKpWcr", "log", "1024689rWNUfV", "readFileSync", "2nxCjEH", "utf8", "8897517qgJQmS"];
  __STRING_ARRAY__ = function () {
    return _0x1f01c6;
  };
  return __STRING_ARRAY__();
}
var C = [];
for (var i = 0; i < n; i++) {
  C[i] = [];
  for (var j = 0; j < n; j++) {
    C[i][j] = i === j ? 0 : Infinity;
  }
}
for (var i = 0; i < m; i++) {
  var A = Arr["shift"]()["split"](",")["map"](Number);
  C[A[0] - 1][A[1] - 1] = A[2];
  C[A[1] - 1][A[0] - 1] = A[3];
}
warshall();
var last = Arr["shift"]().split(",").map(Number);
var cost = C[last[0] - 1][last[1] - 1] + C[last[1] - 1][last[0] - 1] + last[3];
console["log"](last[2] - cost);
