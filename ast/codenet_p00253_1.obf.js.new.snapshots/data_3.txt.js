function __DECODE_0__(DfHedv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 462;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DfHedv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1229323pQwkwY") / 1 + parseInt("2504324WqTSWs") / 2 + -parseInt("2000124eOdzjQ") / 3 + -parseInt("8aimoJU") / 4 * (parseInt("437455HXYjEY") / 5) + -parseInt("1790262zuJaLG") / 6 + -parseInt("5511184baLfWl") / 7 + parseInt("8LwisrT") / 8 * (parseInt("23415111rwXcak") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 697139);
function __STRING_ARRAY__() {
  var _0x111571 = ["shift", "23415111rwXcak", "2504324WqTSWs", "filter", "log", "8aimoJU", "5511184baLfWl", "/dev/stdin", "split", "437455HXYjEY", "2000124eOdzjQ", "utf8", "8LwisrT", "1229323pQwkwY", "readFileSync", "1790262zuJaLG", "map", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x111571;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n === 0) {
    break;
  }
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  for (var i = 0; i < n + 1; i++) {
    var a = arr["filter"](function (v, index) {
      return i != index;
    });
    var h = a[1] - a[0];
    var flag = true;
    for (var j = 1; j < n; j++) {
      if (h != a[j] - a[j - 1]) {
        flag = false;
      }
    }
    if (flag == true) {
      break;
    }
  }
  console["log"](arr[i]);
}
