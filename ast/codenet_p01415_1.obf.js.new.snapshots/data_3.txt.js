(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1daQRpe") / 1 * (-parseInt("1885382aPuNgR") / 2) + -parseInt("3170721TJuwyh") / 3 * (parseInt("4PPaLol") / 4) + -parseInt("180ahqCgO") / 5 * (-parseInt("171222PnuRoH") / 6) + -parseInt("1099vZMqIN") / 7 * (-parseInt("54888OpdFMC") / 8) + parseInt("44046XCatEA") / 9 * (parseInt("1370DKjjDg") / 10) + parseInt("427911Knzlxz") / 11 + parseInt("301740rYSnaE") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 839435);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
var NKTUVL = Arr["shift"]().split(" ")["map"](Number);
var N = NKTUVL[0];
var K = NKTUVL[1];
function __STRING_ARRAY__() {
  var _0x53c72a = ["4PPaLol", "log", "map", "1099vZMqIN", "180ahqCgO", "54888OpdFMC", "1370DKjjDg", "hasOwnProperty", "1daQRpe", "3170721TJuwyh", "trim", "toFixed", "1885382aPuNgR", "171222PnuRoH", "44046XCatEA", "427911Knzlxz", "301740rYSnaE", "/dev/stdin", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x53c72a;
  };
  return __STRING_ARRAY__();
}
var T = NKTUVL[2];
var U = NKTUVL[3];
var V = NKTUVL[4];
var L = NKTUVL[5];
function __DECODE_0__(GsReHH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GsReHH, key);
}
var time = 0;
var obj = {};
for (var i = 0; i < N; i++) {
  obj[Arr.shift() - 0] = true;
}
var fast = 0;
var stock = 0;
for (var i = 0; i < L; i++) {
  var now = obj["hasOwnProperty"](i) ? true : false;
  if (fast == 0 && now == true) {
    time += 1 / V;
    fast = T * V - 1;
    continue;
  }
  if (fast == 0 && now == false && stock == 0) {
    time += 1 / U;
    continue;
  }
  if (fast == 0 && now == false && stock > 0) {
    time += 1 / V;
    fast = T * V - 1;
    stock--;
    continue;
  }
  if (fast > 0 && now == false) {
    time += 1 / V;
    fast--;
    continue;
  }
  if (fast > 0 && now == true && stock + 1 <= K) {
    time += 1 / V;
    fast--;
    stock++;
    continue;
  }
  if (fast > 0 && now == true && stock + 1 > K) {
    time += 1 / V;
    fast = T * V - 1;
    continue;
  }
}
console["log"](time["toFixed"](9));
