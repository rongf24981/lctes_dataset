function __STRING_ARRAY__() {
  var _0x475a0c = ["length", "7HVzAHB", "460574wLPfDN", "shift", "map", "utf8", "7819119aByJAO", "1415928haimAV", "2299860REdMZc", "2290czWgKg", "push", "trim", "2312KETeoS", "634359Pbuesb", "2971776HtMjen", "every", "log", "/dev/stdin", "filter"];
  __STRING_ARRAY__ = function () {
    return _0x475a0c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("634359Pbuesb") / 1 + parseInt("460574wLPfDN") / 2 + -parseInt("2299860REdMZc") / 3 + parseInt("2312KETeoS") / 4 * (-parseInt("2290czWgKg") / 5) + parseInt("2971776HtMjen") / 6 * (-parseInt("7HVzAHB") / 7) + parseInt("1415928haimAV") / 8 + parseInt("7819119aByJAO") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 383788);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(NiPSHj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 440;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NiPSHj, key);
}
var Arr = input["trim"]().split("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var arr = Arr["shift"]().split(" ")["map"](Number);
  var cnt = 0;
  while (true) {
    var flag = arr["every"](function (v, i) {
      return i + 1 == v;
    });
    if (flag) {
      break;
    }
    var L = arr["length"];
    arr = arr["map"](function (v) {
      return v - 1;
    });
    arr = arr["filter"](function (v) {
      return v != 0;
    });
    arr["push"](L);
    cnt++;
    if (cnt == 10000) {
      cnt = -1;
      break;
    }
  }
  console["log"](cnt);
}
