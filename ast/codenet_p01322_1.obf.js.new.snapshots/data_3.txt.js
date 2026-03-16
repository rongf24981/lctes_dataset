function __DECODE_0__(TqCmeP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 338;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TqCmeP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1676641FRmYgo") / 1 + parseInt("1385944SnADpz") / 2 * (parseInt("6RUFrRP") / 3) + -parseInt("7081884oFDrbh") / 4 + -parseInt("5250700bDohIW") / 5 + parseInt("38358QNQxsx") / 6 * (-parseInt("301istBad") / 7) + -parseInt("13675152llGrvC") / 8 + parseInt("24099147yKeYMC") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 935364);
function __STRING_ARRAY__() {
  var _0x5db87f = ["/dev/stdin", "trim", "7081884oFDrbh", "301istBad", "1385944SnADpz", "24099147yKeYMC", "1676641FRmYgo", "slice", "6RUFrRP", "38358QNQxsx", "log", "13675152llGrvC", "5250700bDohIW", "split", "map"];
  __STRING_ARRAY__ = function () {
    return _0x5db87f;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var nm = Arr.shift()["split"](" ")["map"](Number);
  var n = nm[0];
  var m = nm[1];
  if (n == 0) {
    break;
  }
  var obj = {};
  for (var i = 0; i < n; i++) {
    var arr = Arr.shift()["split"](" ");
    var v = arr[0].replace(/\*/g, "");
    obj[v] = arr[1] - 0;
  }
  var sum = 0;
  for (var i = 0; i < m; i++) {
    var v = Arr.shift();
    for (var k in obj) {
      if (k == v["slice"](k.length * -1)) {
        sum += obj[k];
      }
    }
  }
  console["log"](sum);
}
