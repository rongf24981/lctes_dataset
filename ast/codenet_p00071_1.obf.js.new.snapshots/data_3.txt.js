function __DECODE_0__(dMHWWQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 150;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dMHWWQ, key);
}
function __STRING_ARRAY__() {
  var _0x2eca4d = ["map", "trim", "3304EMgwqC", "utf8", "3CGPRDq", "readFileSync", "4eBhYuP", "11OLZdDm", "shift", "20504vuNZFJ", "20471796uwsdOV", "join", "split", "5PvvPZB", "8766441pHzvIa", "1182652ZdAhpR", "/dev/stdin", "182489nfYiUG", "10643600lAkSnG", "5124246BprPnI", "log"];
  __STRING_ARRAY__ = function () {
    return _0x2eca4d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("182489nfYiUG") / 1 * (-parseInt("4eBhYuP") / 2) + -parseInt("3CGPRDq") / 3 * (-parseInt("1182652ZdAhpR") / 4) + -parseInt("5PvvPZB") / 5 * (parseInt("5124246BprPnI") / 6) + parseInt("3304EMgwqC") / 7 * (parseInt("20504vuNZFJ") / 8) + -parseInt("8766441pHzvIa") / 9 + -parseInt("10643600lAkSnG") / 10 + parseInt("11OLZdDm") / 11 * (parseInt("20471796uwsdOV") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 683910);
function bomb(y, x) {
  var dx = [-1, 1, 0, 0];
  var dy = [0, 0, -1, 1];
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j <= 3; j++) {
      var yy = y + dy[i] * j;
      var xx = x + dx[i] * j;
      if (yy < 0 || yy >= 8 || xx < 0 || xx >= 8) {
        continue;
      }
      if (yx[yy][xx] == 1) {
        yx[yy][xx] = 0;
        bomb(yy, xx);
      }
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var AL = Arr["shift"]();
for (var i = 0; i < AL; i++) {
  Arr["shift"]();
  var yx = [];
  for (var j = 0; j < 8; j++) {
    var line = Arr["shift"]()["split"]("")["map"](Number);
    yx.push(line);
  }
  var X = Arr.shift() - 0 - 1;
  var Y = Arr["shift"]() - 0 - 1;
  if (yx[Y][X] == 1) {
    yx[Y][X] = 0;
    bomb(Y, X);
  }
  console["log"]("Data " + (i + 1) + ":");
  for (var j = 0; j < 8; j++) {
    console.log(yx[j]["join"](""));
  }
}
