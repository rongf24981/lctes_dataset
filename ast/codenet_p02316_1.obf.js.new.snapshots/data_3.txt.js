(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("18501mAvuJx") / 1 * (-parseInt("2HyUnNy") / 2) + parseInt("192183hWnCTD") / 3 * (parseInt("4OVznqJ") / 4) + -parseInt("10715QMcWEa") / 5 * (-parseInt("312eRvsnb") / 6) + -parseInt("1350559afaqaX") / 7 + parseInt("2405760rHktVQ") / 8 + parseInt("2161017aqHiCp") / 9 + -parseInt("3446700AsQswh") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 197224);
function knapsack() {
  var C = [];
  for (var i = 0; i <= N; i++) {
    C[i] = [];
  }
  for (var i = 0; i <= W; i++) {
    C[0][i] = 0;
  }
  for (var i = 0; i <= N; i++) {
    C[i][0] = 0;
  }
  for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= W; j++) {
      if (items[i].w <= W) {
        if (items[i].v + C[i - 1][j - items[i].w] > C[i - 1][j]) {
          C[i][j] = items[i].v + C[i - 1][j - items[i].w];
        } else {
          C[i][j] = C[i - 1][j];
        }
      } else {
        C[i][j] = C[i - 1][j];
      }
    }
  }
  return C[N][W];
}
function __DECODE_0__(aFBPhz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 161;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFBPhz, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
var nW = Arr["shift"]()["split"](" ").map(Number);
var n = nW[0];
var W = nW[1];
var N = 0;
var items = [null];
for (var i = 1; i <= n; i++) {
  var arr = Arr.shift().split(" ")["map"](Number);
  var k = 1;
  do {
    items.push({
      v: arr[0] * k,
      w: arr[1] * k
    });
    N++;
    k++;
  } while (arr[1] * k <= W);
}
var max = knapsack();
console["log"](max);
function __STRING_ARRAY__() {
  var _0x193780 = ["3446700AsQswh", "split", "2161017aqHiCp", "map", "192183hWnCTD", "2405760rHktVQ", "10715QMcWEa", "18501mAvuJx", "312eRvsnb", "shift", "4OVznqJ", "utf8", "1350559afaqaX", "log", "readFileSync", "2HyUnNy"];
  __STRING_ARRAY__ = function () {
    return _0x193780;
  };
  return __STRING_ARRAY__();
}
