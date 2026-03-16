(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("95977XBACDK") / 1 * (-parseInt("4ZkmYBY") / 2) + parseInt("2814lQYtQr") / 3 * (parseInt("2140FbEadQ") / 4) + -parseInt("2917955NLymNc") / 5 + parseInt("1747350CkWuLl") / 6 + parseInt("1913394erWvCm") / 7 * (parseInt("8nuSrPh") / 8) + parseInt("9KszkIh") / 9 * (-parseInt("815510jjqqQz") / 10) + -parseInt("31757wvcREd") / 11 * (parseInt("1164xsQOvX") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 313170);
function __STRING_ARRAY__() {
  var _0x14e322 = ["trim", "31757wvcREd", "815510jjqqQz", "/dev/stdin", "log", "indexOf", "2917955NLymNc", "shift", "map", "2140FbEadQ", "split", "1913394erWvCm", "1747350CkWuLl", "readFileSync", "4ZkmYBY", "8nuSrPh", "2814lQYtQr", "95977XBACDK", "1164xsQOvX", "9KszkIh"];
  __STRING_ARRAY__ = function () {
    return _0x14e322;
  };
  return __STRING_ARRAY__();
}
function bomb(y, x) {
  var dy = [0, 0, -1, 1];
  var dx = [-1, 1, 0, 0];
  for (var i = 0; i < 4; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0 || yy >= H || xx < 0 || xx >= W) {
      continue;
    }
    if (yx[yy][xx] == ".") {
      cnt++;
      yx[yy][xx] = cnt;
      bomb(yy, xx);
    }
  }
}
function __DECODE_0__(VvGUHo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 236;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VvGUHo, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
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
    var arr = Arr["shift"]()["split"]("");
    if (arr["indexOf"]("@") != -1) {
      Y = i;
      X = arr.indexOf("@");
    }
    yx.push(arr);
  }
  var cnt = 1;
  bomb(Y, X);
  console["log"](cnt);
}
