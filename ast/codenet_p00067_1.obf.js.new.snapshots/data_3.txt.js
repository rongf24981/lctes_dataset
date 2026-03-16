function __STRING_ARRAY__() {
  var _0x535c75 = ["push", "split", "2345049sAMCwY", "readFileSync", "length", "9251fUgvaB", "150luKIBo", "2565207jSyPwo", "252752EuqaIS", "37430dYkgfi", "24dXXBcq", "trim", "utf8", "2169032PECxtt", "138590YglXLD", "log", "4fHsKhY", "3425910btVpYL"];
  __STRING_ARRAY__ = function () {
    return _0x535c75;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("4fHsKhY") / 1 * (parseInt("252752EuqaIS") / 2) + -parseInt("3425910btVpYL") / 3 + -parseInt("2169032PECxtt") / 4 + -parseInt("138590YglXLD") / 5 * (parseInt("150luKIBo") / 6) + -parseInt("2345049sAMCwY") / 7 + -parseInt("24dXXBcq") / 8 * (-parseInt("2565207jSyPwo") / 9) + parseInt("37430dYkgfi") / 10 * (parseInt("9251fUgvaB") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 785243);
function __DECODE_0__(liVgok, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 322;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liVgok, key);
}
function bomb(y, x) {
  var dy = [0, 0, -1, 1];
  var dx = [-1, 1, 0, 0];
  for (var i = 0; i < 4; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0 || yy >= 12 || xx < 0 || xx >= 12) {
      continue;
    }
    if (yx[yy][xx] == "a") {
      yx[yy][xx] = cnt;
      bomb(yy, xx);
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
var n = 0;
var cnt = 0;
var yx = [];
for (var I = 0; I < Arr["length"]; I++) {
  n++;
  var v = Arr[I].replace(/1/g, "a");
  var arr = v["split"]("");
  yx["push"](arr);
  if (n != 12) {
    continue;
  }
  cnt = 0;
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      if (yx[i][j] == "a") {
        cnt++;
        yx[i][j] = cnt;
        bomb(i, j);
      }
    }
  }
  console["log"](cnt);
  n = 0;
  yx = [];
  I++;
}
