function __STRING_ARRAY__() {
  var _0x35ce50 = ["push", "977049HRJbWZ", "422274yaghWg", "shift", "/dev/stdin", "split", "readFileSync", "1096565UoZlBL", "580412vhEihf", "18MMOvtw", "utf8", "map", "4NaqfmC", "1748952oeUVqi", "656324PvaYcX", "5217816TQSGiI"];
  __STRING_ARRAY__ = function () {
    return _0x35ce50;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("422274yaghWg") / 1 + -parseInt("656324PvaYcX") / 2 + -parseInt("977049HRJbWZ") / 3 + parseInt("4NaqfmC") / 4 * (-parseInt("1096565UoZlBL") / 5) + parseInt("1748952oeUVqi") / 6 + -parseInt("580412vhEihf") / 7 + -parseInt("5217816TQSGiI") / 8 * (-parseInt("18MMOvtw") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 217598);
function __DECODE_0__(fEwiCd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 260;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fEwiCd, key);
}
function bomb(y, x, v) {
  var dy = [0, 0, -1, 1];
  var dx = [-1, 1, 0, 0];
  for (var i = 0; i < 4; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0 || yy >= n[0] || xx < 0 || xx >= n[1]) {
      continue;
    }
    if (v == yx[yy][xx]) {
      yx[yy][xx] = 0;
      bomb(yy, xx, v);
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
while (true) {
  var n = Arr["shift"]()["split"](" ")["map"](Number);
  if (n[0] == 0 && n[1] == 0) {
    break;
  }
  var yx = [];
  for (var i = 0; i < n[0]; i++) {
    var arr = Arr["shift"]()["split"]("");
    yx["push"](arr);
  }
  var cnt = 0;
  for (var i = 0; i < n[0]; i++) {
    for (var j = 0; j < n[1]; j++) {
      var v = yx[i][j];
      if (v == "@" || v == "#" || v == "*") {
        cnt++;
        yx[i][j] = 0;
        bomb(i, j, v);
      }
    }
  }
  console.log(cnt);
}
