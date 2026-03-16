function __DECODE_0__(urnCfK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 197;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(urnCfK, key);
}
function __STRING_ARRAY__() {
  var _0x21919b = ["21968892qndrNn", "shift", "1583183gmdCyZ", "8mLmPfs", "2731353wNTZfU", "1637175tEhICM", "log", "2ElAAyG", "split", "map", "/dev/stdin", "1690628pgpJes", "push", "hasOwnProperty", "trim", "1644972VvCaDy", "783574DtDtgM"];
  __STRING_ARRAY__ = function () {
    return _0x21919b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("783574DtDtgM") / 1 + -parseInt("2ElAAyG") / 2 * (parseInt("2731353wNTZfU") / 3) + -parseInt("1690628pgpJes") / 4 + -parseInt("1637175tEhICM") / 5 + parseInt("1644972VvCaDy") / 6 + parseInt("1583183gmdCyZ") / 7 * (parseInt("8mLmPfs") / 8) + parseInt("21968892qndrNn") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 497202);
function bomb(y, x) {
  var Y = yx[y][x][1];
  var X = yx[y][x][0];
  if (ring["hasOwnProperty"](Y + "," + X)) {
    var flag = true;
    for (var k in ring) {
      if (obj["hasOwnProperty"](k)) {
        flag = false;
      }
      obj[k] = true;
    }
    if (flag) {
      cnt++;
    }
  } else {
    ring[Y + "," + X] = true;
    bomb(Y, X);
  }
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var yx = [];
  for (var i = 0; i < n; i++) {
    var tile = arr["shift"]()["split"](" ")["map"](Number);
    var t = [];
    for (var j = 0; j < n; j++) {
      t[j] = [tile["shift"](), tile["shift"]()];
    }
    yx["push"](t);
  }
  var obj = {};
  var cnt = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (obj.hasOwnProperty(i + "," + j)) {
        continue;
      }
      var ring = {
        [i + "," + j]: true
      };
      bomb(i, j);
    }
  }
  console["log"](cnt);
}
