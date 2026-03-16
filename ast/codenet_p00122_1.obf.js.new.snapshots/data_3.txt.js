function __DECODE_0__(KBImnh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 443;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KBImnh, key);
}
function __STRING_ARRAY__() {
  var _0x39e60a = ["427NdCpON", "137059QOjZcg", "max", "215rhqLUE", "100436fLoaGh", "utf8", "92850jPdctj", "shift", "log", "/dev/stdin", "149840sFOkgq", "631056EvqIiG", "map", "747crmTYD", "readFileSync", "2595090GlKEKu", "1924671XIeXRC", "split"];
  __STRING_ARRAY__ = function () {
    return _0x39e60a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("137059QOjZcg") / 1 + parseInt("2595090GlKEKu") / 2 + parseInt("1924671XIeXRC") / 3 + -parseInt("100436fLoaGh") / 4 * (parseInt("215rhqLUE") / 5) + parseInt("631056EvqIiG") / 6 + parseInt("427NdCpON") / 7 * (-parseInt("149840sFOkgq") / 8) + -parseInt("747crmTYD") / 9 * (-parseInt("92850jPdctj") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 729775);
function bomb(x, y, z) {
  max = Math["max"](max, z);
  if (max == n) {
    return;
  }
  var dx = [-1, 0, 1, -2, 2, -2, 2, -2, 2, -1, 0, 1];
  var dy = [-2, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 2];
  var Safe = {};
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      Safe[water[z * 2] + i + " " + (water[z * 2 + 1] + j)] = true;
    }
  }
  for (var i = 0; i < 12; i++) {
    var xx = x + dx[i];
    var yy = y + dy[i];
    if (xx < 0 || yy < 0 || xx >= 10 || yy >= 10) {
      continue;
    }
    if (Safe.hasOwnProperty(xx + " " + yy)) {
      bomb(xx, yy, z + 1);
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var xy = Arr["shift"]().split(" ")["map"](Number);
  if (xy[0] == 0 && xy[1] == 0) {
    break;
  }
  var map = [[], [], [], [], [], [], [], [], [], []];
  var n = Arr["shift"]() - 0;
  var water = Arr["shift"]()["split"](" ").map(Number);
  var max = 0;
  bomb(xy[0], xy[1], 0);
  console["log"](max == n ? "OK" : "NA");
}
