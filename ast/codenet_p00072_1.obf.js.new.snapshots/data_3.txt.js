(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("227693otDcLl") / 1 * (parseInt("4oPxWIV") / 2) + -parseInt("465186uThlOT") / 3 + parseInt("4644476DzrPso") / 4 + parseInt("2540FkshfQ") / 5 * (-parseInt("11076hhJJAz") / 6) + -parseInt("5079123jmLDgP") / 7 + parseInt("368XCTiDh") / 8 * (-parseInt("25641lCIazP") / 9) + parseInt("419810HVFidF") / 10 * (parseInt("539QktKzf") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 813329);
function __DECODE_0__(TQNVno, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 208;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TQNVno, key);
}
function __STRING_ARRAY__() {
  var _0x2790c0 = ["4644476DzrPso", "368XCTiDh", "25641lCIazP", "465186uThlOT", "shift", "/dev/stdin", "227693otDcLl", "indexOf", "419810HVFidF", "readFileSync", "11076hhJJAz", "split", "5079123jmLDgP", "utf8", "push", "4oPxWIV", "length", "trim", "log", "2540FkshfQ", "539QktKzf"];
  __STRING_ARRAY__ = function () {
    return _0x2790c0;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var m = Arr.shift() - 0;
  var N = [];
  for (var i = 0; i < n; i++) {
    N[i] = [];
    for (var j = 0; j < n; j++) {
      N[i][j] = Infinity;
      if (i == j) {
        N[i][j] = 0;
      }
    }
  }
  var arr = [];
  for (var i = 0; i < m; i++) {
    var abc = Arr["shift"]()["split"](",").map(Number);
    var a = abc[0];
    var b = abc[1];
    var c = abc[2] / 100;
    N[a][b] = c;
    N[b][a] = c;
  }
  var city = [0];
  var cost = 0;
  while (true) {
    if (city["length"] == n) {
      break;
    }
    var min = Infinity;
    var select = -1;
    for (var i = 0; i < city["length"]; i++) {
      for (var j = 0; j < n; j++) {
        if (city["indexOf"](j) != -1) {
          continue;
        }
        if (N[city[i]][j] < min) {
          select = j;
          min = N[city[i]][j] - 1;
        }
      }
    }
    if (select != -1) {
      cost += min;
      city["push"](select);
    }
  }
  console["log"](cost);
}
