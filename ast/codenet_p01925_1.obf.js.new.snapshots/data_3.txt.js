(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("302436jhpAee") / 1 + parseInt("4TRtsVU") / 2 * (-parseInt("27630sIfgFR") / 3) + parseInt("2868OaXAZg") / 4 * (parseInt("215sudNNv") / 5) + -parseInt("975852RrxANV") / 6 + parseInt("159523VnyHQp") / 7 + -parseInt("2376584UoQaoh") / 8 + -parseInt("9dYeAfN") / 9 * (-parseInt("9084770ULorwl") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 181526);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0xe3ff5d = ["0 0", "2376584UoQaoh", "159523VnyHQp", "shift", "/dev/stdin", "forEach", "302436jhpAee", "27630sIfgFR", "215sudNNv", "9dYeAfN", "split", "trim", "4TRtsVU", "9084770ULorwl", "2868OaXAZg", "max", "975852RrxANV", "log", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xe3ff5d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RcUxil, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 345;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RcUxil, key);
}
while (true) {
  if (arr[0] == "0 0") {
    break;
  }
  var nm = arr["shift"]()["split"](" ").map(Number);
  var point = [];
  for (var i = 0; i < nm[0]; i++) {
    point[i] = [0, 0];
  }
  for (var i = 0; i < nm[1]; i++) {
    var c = arr.shift()["split"](" ").map(Number);
    var s = c["shift"]();
    var k = c["shift"]();
    if (k == 1) {
      point[c[0] - 1][0] += s;
    }
    c["forEach"](function (v, i) {
      point[v - 1][1] += s;
    });
  }
  var max = 0;
  for (var i = 0; i < nm[0]; i++) {
    for (var j = 0; j < nm[0]; j++) {
      if (i == j) {
        continue;
      }
      max = Math["max"](max, point[i][1] - point[j][0]);
    }
  }
  console["log"](max + 1);
}
