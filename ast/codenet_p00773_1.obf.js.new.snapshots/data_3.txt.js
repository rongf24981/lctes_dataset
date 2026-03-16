function __STRING_ARRAY__() {
  var _0x198901 = ["276SgSBkT", "/dev/stdin", "2UqJIIg", "utf8", "split", "shift", "3349626GeIleg", "1614840wYRTqp", "readFileSync", "log", "trim", "4093232BqrnAa", "24YZceEZ", "7620790FLGJoE", "206731aEratj", "8886123xYEcZr", "floor", "map", "78252udhhvh", "8phqVna", "14qWVrHh"];
  __STRING_ARRAY__ = function () {
    return _0x198901;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("206731aEratj") / 1 * (-parseInt("2UqJIIg") / 2) + parseInt("78252udhhvh") / 3 * (-parseInt("276SgSBkT") / 4) + parseInt("7620790FLGJoE") / 5 + -parseInt("3349626GeIleg") / 6 * (-parseInt("14qWVrHh") / 7) + -parseInt("8phqVna") / 8 * (parseInt("8886123xYEcZr") / 9) + parseInt("1614840wYRTqp") / 10 + -parseInt("4093232BqrnAa") / 11 * (-parseInt("24YZceEZ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 965996);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(BLPsIS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 151;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BLPsIS, key);
}
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var xys = Arr["shift"]().split(" ")["map"](Number);
  var x = xys[0];
  var y = xys[1];
  var s = xys[2];
  if (x == 0 && y == 0 && s == 0) {
    break;
  }
  var max = 0;
  for (var i = 1; i <= s - 1; i++) {
    for (var j = 1; j <= s - 1; j++) {
      var a = Math["floor"](i * (100 + x) / 100) + Math["floor"](j * (100 + x) / 100);
      if (a > s) {
        break;
      }
      if (a == s) {
        var b = Math["floor"](i * (100 + y) / 100) + Math["floor"](j * (100 + y) / 100);
        max = Math.max(max, b);
        break;
      }
    }
  }
  console["log"](max);
}
