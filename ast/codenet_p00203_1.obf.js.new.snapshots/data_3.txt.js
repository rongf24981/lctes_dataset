(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("11aCXXhK") / 1 * (-parseInt("8582mtgPsw") / 2) + -parseInt("183090gseKKT") / 3 + -parseInt("1087788uhWnBG") / 4 + parseInt("364995BMuPSy") / 5 + -parseInt("1810686WePicV") / 6 * (parseInt("7RPoSXb") / 7) + parseInt("8utVrwV") / 8 * (-parseInt("1216269eGYgZB") / 9) + parseInt("8991390sSYlTC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 155038);
function bomb(y, x) {
  if (yx[y][x] == 1) {
    return;
  } else if (yx[y][x] == 2) {
    var Y = y + 2;
    var X = x;
    if (Y >= h) {
      cnt++;
      return;
    }
    bomb(Y, X);
  } else if (yx[y][x] == 0) {
    var dx = [-1, 0, 1];
    for (var i = 0; i < dx["length"]; i++) {
      var Y = y + 1;
      var X = x + dx[i];
      if (X < 0 || X >= w) {
        continue;
      }
      if (Y >= h) {
        cnt++;
        return;
      }
      if (yx[Y][X] == 2 && dx[i] != 0) {
        continue;
      }
      bomb(Y, X);
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(GJEdnz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 401;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GJEdnz, key);
}
var arr = input["trim"]()["split"]("\n");
while (true) {
  var wh = arr.shift()["split"](" ").map(Number);
  var w = wh[0];
  var h = wh[1];
  if (w == 0 && h == 0) {
    break;
  }
  var yx = [];
  for (var i = 0; i < h; i++) {
    yx["push"](arr.shift()["split"](" ")["map"](Number));
  }
  var cnt = 0;
  for (var i = 0; i < w; i++) {
    bomb(0, i);
  }
  console["log"](cnt);
}
function __STRING_ARRAY__() {
  var _0xce96f8 = ["8991390sSYlTC", "11aCXXhK", "8utVrwV", "push", "trim", "log", "map", "/dev/stdin", "1216269eGYgZB", "readFileSync", "1810686WePicV", "split", "1087788uhWnBG", "length", "183090gseKKT", "8582mtgPsw", "364995BMuPSy", "7RPoSXb"];
  __STRING_ARRAY__ = function () {
    return _0xce96f8;
  };
  return __STRING_ARRAY__();
}
