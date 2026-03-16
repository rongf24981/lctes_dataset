(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3HTUbly") / 1 * (parseInt("129882uWsPat") / 2) + parseInt("6XRwbnz") / 3 * (parseInt("571944uOsCzl") / 4) + -parseInt("953500gfRFEA") / 5 + parseInt("1835874xOeJwA") / 6 + parseInt("2387693mrnWPR") / 7 * (-parseInt("8zXBhLM") / 8) + parseInt("720qZjAeo") / 9 * (parseInt("8710NeyBdB") / 10) + -parseInt("1168376XTuino") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 218439);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x3347e8 = ["trim", "split", "readFileSync", "map", "6XRwbnz", "shift", "log", "8710NeyBdB", "1835874xOeJwA", "1168376XTuino", "720qZjAeo", "utf8", "2387693mrnWPR", "953500gfRFEA", "/dev/stdin", "3HTUbly", "571944uOsCzl", "129882uWsPat", "8zXBhLM"];
  __STRING_ARRAY__ = function () {
    return _0x3347e8;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
function __DECODE_0__(uumJNR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 253;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uumJNR, key);
}
while (true) {
  var nh = arr.shift();
  if (nh == "0 0") {
    break;
  }
  nh = nh.split(" ")["map"](Number);
  var n = nh[0];
  var h = nh[1];
  var xyz = [];
  for (var i = 0; i < n; i++) {
    xyz[i] = [];
    for (var j = 0; j < n; j++) {
      xyz[i][j] = [];
      for (var k = 0; k < n; k++) {
        xyz[i][j][k] = 0;
      }
    }
  }
  for (var I = 0; I < h; I++) {
    var ary = arr.shift()["split"](" ");
    var c = ary["shift"]();
    ary = ary["map"](function (v) {
      return v - 1;
    });
    if (c == "xy") {
      for (var i = 0; i < n; i++) {
        xyz[ary[0]][ary[1]][i] = 1;
      }
    } else if (c == "xz") {
      for (var i = 0; i < n; i++) {
        xyz[ary[0]][i][ary[1]] = 1;
      }
    } else if (c == "yz") {
      for (var i = 0; i < n; i++) {
        xyz[i][ary[0]][ary[1]] = 1;
      }
    }
  }
  var cnt = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        if (xyz[i][j][k] == 0) {
          cnt++;
        }
        ;
      }
    }
  }
  console["log"](cnt);
}
