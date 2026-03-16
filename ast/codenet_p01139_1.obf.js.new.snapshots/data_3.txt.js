function __DECODE_0__(TKkhIt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 364;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TKkhIt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("42803RyNWYC") / 1 * (parseInt("14ywpVvI") / 2) + -parseInt("599964XxOhcR") / 3 + -parseInt("777916gOkxpC") / 4 * (parseInt("10MmFrfR") / 5) + -parseInt("662178VOMJxw") / 6 + parseInt("2183699DTYnnY") / 7 + -parseInt("1358872vqWxaq") / 8 + -parseInt("3227139WMhAXG") / 9 * (-parseInt("30XWnZkc") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 218881);
function __STRING_ARRAY__() {
  var _0x1b0622 = ["trim", "14ywpVvI", "42803RyNWYC", "map", "/dev/stdin", "777916gOkxpC", "3227139WMhAXG", "shift", "662178VOMJxw", "split", "30XWnZkc", "10MmFrfR", "599964XxOhcR", "readFileSync", "log", "1358872vqWxaq", "2183699DTYnnY", "0 0"];
  __STRING_ARRAY__ = function () {
    return _0x1b0622;
  };
  return __STRING_ARRAY__();
}
function bomb(y, x) {
  cnt++;
  var dx = [0, -1, 1, 0];
  var dy = [-1, 0, 0, 1];
  for (var i = 0; i < 4; i++) {
    var X = x + dx[i];
    var Y = y + dy[i];
    if (Y >= h || Y < 0 || X >= w || X < 0) {
      continue;
    }
    if (yx[Y][X] == "S") {
      continue;
    } else if (yx[Y][X] == ".") {
      yx[Y][X] = "S";
      bomb(Y, X);
    } else if (color == "" || color == yx[Y][X]) {
      color = yx[Y][X];
    } else {
      color = "bad";
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var wh = arr["shift"]();
  if (wh == "0 0") {
    break;
  }
  wh = wh["split"](" ")["map"](Number);
  var w = wh[0];
  var h = wh[1];
  var yx = [];
  for (var i = 0; i < h; i++) {
    yx.push(arr["shift"]()["split"](""));
  }
  var ans = [0, 0];
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var color = "";
      var cnt = 0;
      if (yx[y][x] == ".") {
        yx[y][x] = "S";
        bomb(y, x);
      }
      if (color == "B") {
        ans[0] += cnt;
      } else if (color == "W") {
        ans[1] += cnt;
      }
    }
  }
  console["log"](ans[0] + " " + ans[1]);
}
