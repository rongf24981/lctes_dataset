(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("9157yJVuYo") / 1 * (-parseInt("274uuTGau") / 2) + -parseInt("2439606TVtBaR") / 3 + parseInt("1754360TcLjVd") / 4 + -parseInt("5mNHDYs") / 5 * (parseInt("367260XTZTrL") / 6) + -parseInt("10586254TUrAuf") / 7 + parseInt("8APAcAD") / 8 * (parseInt("13059117nhYvSl") / 9) + -parseInt("10250TWgrDc") / 10 * (-parseInt("209VbzgIi") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 776853);
function bomb(y, x) {
  var dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  var dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  for (var i = 0; i < 8; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0 || yy >= H || xx < 0 || xx >= W) {
      continue;
    }
    if (yx[yy][xx] == "a") {
      yx[yy][xx] = cnt;
      bomb(yy, xx);
    }
  }
}
function __STRING_ARRAY__() {
  var _0x11b73e = ["log", "utf8", "274uuTGau", "readFileSync", "10586254TUrAuf", "13059117nhYvSl", "8APAcAD", "209VbzgIi", "push", "10250TWgrDc", "9157yJVuYo", "2439606TVtBaR", "trim", "shift", "5mNHDYs", "replace", "/dev/stdin", "1754360TcLjVd", "367260XTZTrL", "map", "split"];
  __STRING_ARRAY__ = function () {
    return _0x11b73e;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(FKciFz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 128;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FKciFz, key);
}
while (true) {
  var WH = Arr["shift"]()["split"](" ")["map"](Number);
  var W = WH[0];
  var H = WH[1];
  if (W == 0 && H == 0) {
    break;
  }
  var yx = [];
  var Y;
  var X;
  for (var i = 0; i < H; i++) {
    var str = Arr.shift();
    str = str["replace"](/1/g, "a");
    var arr = str["split"](" ");
    yx["push"](arr);
  }
  var cnt = 0;
  for (var i = 0; i < H; i++) {
    for (var j = 0; j < W; j++) {
      if (yx[i][j] == "a") {
        cnt++;
        yx[i][j] = cnt;
        bomb(i, j);
      }
    }
  }
  console["log"](cnt);
}
