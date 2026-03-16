(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("255863rQpkOg") / 1 + -parseInt("2VudTqc") / 2 * (parseInt("89373tolWvK") / 3) + -parseInt("651032ztrvIT") / 4 + -parseInt("5GqfRyv") / 5 * (parseInt("488646IMCbvx") / 6) + -parseInt("49rkVbhO") / 7 * (parseInt("264224yAneZs") / 8) + -parseInt("9tTcPbr") / 9 * (parseInt("2810020qHmRRo") / 10) + -parseInt("10890xRojAx") / 11 * (-parseInt("14460vVVEei") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 150899);
function stoneRemove() {
  yx["forEach"](function (v, i) {
    var str = v["join"]("").replace(/([1-9])\1{2,}/, function (x) {
      point += (x[0] - 0) * x["length"];
      return x["replace"](/./g, "0");
    });
    yx[i] = str["split"]("").map(Number);
  });
  var flag = true;
  while (flag) {
    flag = false;
    for (var i = 0; i < H - 1; i++) {
      for (var j = 0; j < 5; j++) {
        if (yx[i][j] != 0 && yx[i + 1][j] == 0) {
          yx[i + 1][j] = yx[i][j];
          yx[i][j] = 0;
          flag = true;
        }
      }
    }
  }
}
function __STRING_ARRAY__() {
  var _0x4f8b17 = ["replace", "14460vVVEei", "49rkVbhO", "join", "9tTcPbr", "2VudTqc", "264224yAneZs", "10890xRojAx", "5GqfRyv", "length", "651032ztrvIT", "trim", "utf8", "/dev/stdin", "split", "2810020qHmRRo", "map", "255863rQpkOg", "log", "shift", "forEach", "488646IMCbvx", "89373tolWvK"];
  __STRING_ARRAY__ = function () {
    return _0x4f8b17;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(YGXzaI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 182;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YGXzaI, key);
}
var arr = input["trim"]()["split"]("\n");
while (true) {
  var h = arr["shift"]() - 0;
  if (h == 0) {
    break;
  }
  var H = h;
  var yx = [];
  while (h--) {
    yx.push(arr["shift"]()["split"](" ")["map"](Number));
  }
  var point = 0;
  var p = point;
  while (true) {
    stoneRemove();
    if (p == point) {
      break;
    }
    p = point;
  }
  console["log"](point);
}
