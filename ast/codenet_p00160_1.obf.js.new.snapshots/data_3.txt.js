function __DECODE_0__(fzmRXj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 210;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fzmRXj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("575322iQsluF") / 1 + parseInt("653250qUFKED") / 2 + -parseInt("3351ImGxLr") / 3 * (parseInt("1304ersCsA") / 4) + -parseInt("5XSNkQt") / 5 * (parseInt("3512322FKpuLR") / 6) + parseInt("3437301HVnxXA") / 7 + -parseInt("2800456QdEjye") / 8 * (parseInt("9dOVmtw") / 9) + -parseInt("20rewYpe") / 10 * (-parseInt("1418791YwyJfi") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 351366);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x20a3ec = ["1418791YwyJfi", "9dOVmtw", "653250qUFKED", "readFileSync", "3512322FKpuLR", "1304ersCsA", "2800456QdEjye", "map", "split", "shift", "5XSNkQt", "3351ImGxLr", "3437301HVnxXA", "log", "trim", "max", "20rewYpe", "575322iQsluF"];
  __STRING_ARRAY__ = function () {
    return _0x20a3ec;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var sum = 0;
  for (var i = 0; i < n; i++) {
    var arr = Arr.shift()["split"](" ")["map"](Number);
    var L = arr[0] + arr[1] + arr[2];
    var W = arr[3];
    var x;
    if (L > 160) {
      x = 0;
    }
    if (L <= 160) {
      x = 1600;
    }
    if (L <= 140) {
      x = 1400;
    }
    if (L <= 120) {
      x = 1200;
    }
    if (L <= 100) {
      x = 1000;
    }
    if (L <= 80) {
      x = 800;
    }
    if (L <= 60) {
      x = 600;
    }
    var y;
    if (W > 25) {
      y = 0;
    }
    if (W <= 25) {
      y = 1600;
    }
    if (W <= 20) {
      y = 1400;
    }
    if (W <= 15) {
      y = 1200;
    }
    if (W <= 10) {
      y = 1000;
    }
    if (W <= 5) {
      y = 800;
    }
    if (W <= 2) {
      y = 600;
    }
    if (x != 0 && y != 0) {
      sum += Math["max"](x, y);
    }
  }
  console["log"](sum);
}
