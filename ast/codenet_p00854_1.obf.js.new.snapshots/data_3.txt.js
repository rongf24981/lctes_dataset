(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("288601ZqcdLC") / 1 + -parseInt("1579804xFPCLR") / 2 + -parseInt("1421643vlKhgQ") / 3 * (parseInt("4iZeYjr") / 4) + parseInt("105lFzkcd") / 5 * (-parseInt("82734OdwUQE") / 6) + -parseInt("7jlgMnC") / 7 * (parseInt("6132032QoRYMD") / 8) + -parseInt("1755477kDVZAF") / 9 + -parseInt("26328580akIwrv") / 10 * (-parseInt("11KYvhYL") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 406550);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __DECODE_0__(krfcxV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 291;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(krfcxV, key);
}
function __STRING_ARRAY__() {
  var _0x5bc590 = ["7jlgMnC", "82734OdwUQE", "/dev/stdin", "6132032QoRYMD", "288601ZqcdLC", "split", "26328580akIwrv", "1421643vlKhgQ", "105lFzkcd", "map", "11KYvhYL", "1579804xFPCLR", "utf8", "4iZeYjr", "1755477kDVZAF", "log", "trim", "length"];
  __STRING_ARRAY__ = function () {
    return _0x5bc590;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var nm = arr.shift();
  if (nm == "0 0 0") {
    break;
  }
  nm = nm["split"](" ")["map"](Number);
  var n = nm[0];
  var m = nm[1];
  var start = nm[2];
  var ary = [];
  for (var i = 0; i <= n; i++) {
    ary[i] = true;
  }
  var i = start;
  var j = 0;
  ary[start] = false;
  var cnt = 1;
  while (true) {
    if (ary[i]) {
      j++;
      if (j == m) {
        ary[i] = false;
        j = 0;
        cnt++;
        if (cnt == ary["length"] - 2) {
          break;
        }
      }
    }
    i++;
    if (ary.length - 1 < i) {
      i = 1;
    }
  }
  for (var i = 1; i <= n; i++) {
    if (ary[i]) {
      console["log"](i);
    }
  }
}
