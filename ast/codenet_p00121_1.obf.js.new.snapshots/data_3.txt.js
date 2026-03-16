function __DECODE_0__(Izuwfj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 255;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Izuwfj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("45433kSJRiy") / 1 * (-parseInt("22LLNFGA") / 2) + -parseInt("3027561hVqWmD") / 3 * (parseInt("4VRQzaB") / 4) + parseInt("3987165yTcvYC") / 5 + -parseInt("3183018aoqCSD") / 6 * (-parseInt("7EFmTGQ") / 7) + parseInt("8gOhsEe") / 8 * (-parseInt("5951727tQhSVN") / 9) + parseInt("223950KTCazY") / 10 * (-parseInt("451qQhzQT") / 11) + -parseInt("28913628BYJzRK") / 12 * (-parseInt("13daSTrm") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 648957);
function __STRING_ARRAY__() {
  var _0x3e5ea0 = ["451qQhzQT", "trim", "push", "log", "8gOhsEe", "3183018aoqCSD", "shift", "45433kSJRiy", "3987165yTcvYC", "13daSTrm", "01234567", "indexOf", "length", "concat", "/dev/stdin", "223950KTCazY", "7EFmTGQ", "map", "utf8", "forEach", "split", "3027561hVqWmD", "join", "28913628BYJzRK", "slice", "4VRQzaB", "5951727tQhSVN", "22LLNFGA", "readFileSync", "floor"];
  __STRING_ARRAY__ = function () {
    return _0x3e5ea0;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var dy = [-1, 0, 0, 1];
var dx = [0, -1, 1, 0];
Arr["forEach"](function (v, I) {
  var V = v.split(" ")["map"](Number);
  var obj = {};
  var P = [[V, 0]];
  while (P["length"] > 0) {
    var A = P["shift"]();
    var arr = A[0];
    var cnt = A[1];
    if (arr["join"]("") == "01234567") {
      console["log"](cnt);
      break;
    }
    var index = arr["indexOf"](0);
    var y = Math["floor"](index / 4);
    var x = index % 4;
    var yx = [arr["slice"](0, 4), arr["slice"](4, 8)];
    for (var i = 0; i < 4; i++) {
      var yy = y + dy[i];
      var xx = x + dx[i];
      if (yy < 0 || xx < 0 || yy >= 2 || xx >= 4) {
        continue;
      }
      yx[y][x] = yx[yy][xx];
      var card = yx[yy][xx];
      yx[yy][xx] = 0;
      var YX = yx[0]["concat"](yx[1]);
      var str = YX["join"]("");
      if (obj.hasOwnProperty(str) == false) {
        obj[str] = true;
        P["push"]([YX, cnt + 1]);
      }
      yx[yy][xx] = card;
      yx[y][x] = 0;
    }
  }
});
