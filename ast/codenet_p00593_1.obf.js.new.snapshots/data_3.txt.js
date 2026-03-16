(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1429471NwTrNu") / 1 + parseInt("3372216gVxlUp") / 2 * (-parseInt("3ijFkUn") / 3) + -parseInt("2195008grsxRs") / 4 * (parseInt("10SrTEUu") / 5) + parseInt("1876290zsrxsy") / 6 * (-parseInt("21rgzpgd") / 7) + parseInt("9914096slOLGC") / 8 + parseInt("284193VgyYxX") / 9 * (parseInt("10wsKuNd") / 10) + -parseInt("20673994IOBKXn") / 11 * (-parseInt("12hsmvHW") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 858007);
function bomb(y, x, cnt, f) {
  yx[y][x] = ("   " + cnt)["slice"](-3);
  if (y == n - 1 && x == n - 1) {
    return;
  } else if (y == n - 1 && f == -1) {
    bomb(y, x + 1, cnt + 1, 1);
  } else if (y == n - 1 && f == 1) {
    bomb(y - 1, x + 1, cnt + 1, 1);
  } else if (x == n - 1 && f == 1) {
    bomb(y + 1, x, cnt + 1, -1);
  } else if (x == n - 1 && f == -1) {
    bomb(y + 1, x - 1, cnt + 1, -1);
  } else if (y == 0 && f == 1) {
    bomb(y, x + 1, cnt + 1, -1);
  } else if (y == 0 && f == -1) {
    bomb(y + 1, x - 1, cnt + 1, -1);
  } else if (x == 0 && f == -1) {
    bomb(y + 1, x, cnt + 1, 1);
  } else if (x == 0 && f == 1) {
    bomb(y - 1, x + 1, cnt + 1, 1);
  } else if (f == 1) {
    bomb(y - 1, x + 1, cnt + 1, 1);
  } else if (f == -1) {
    bomb(y + 1, x - 1, cnt + 1, -1);
  }
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var I = 1;
function __STRING_ARRAY__() {
  var _0x12bd44 = ["284193VgyYxX", "shift", "9914096slOLGC", "replace", "1876290zsrxsy", "slice", "3ijFkUn", "log", "3372216gVxlUp", "2195008grsxRs", "10wsKuNd", "utf8", "/dev/stdin", "21rgzpgd", "1429471NwTrNu", "12hsmvHW", "20673994IOBKXn", "join", "trim", "Case ", "   ", "split", "10SrTEUu"];
  __STRING_ARRAY__ = function () {
    return _0x12bd44;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Sgfyyj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 173;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Sgfyyj, key);
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var yx = [];
  for (var i = 0; i < n; i++) {
    yx[i] = [];
    for (var j = 0; j < n; j++) {
      yx[i][j] = 0;
    }
  }
  bomb(0, 0, 1, 1);
  console["log"]("Case " + I + ":");
  I++;
  console["log"](yx["join"]("\n")["replace"](/\,/g, ""));
}
