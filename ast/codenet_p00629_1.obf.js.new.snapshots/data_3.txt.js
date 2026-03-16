(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("37ZmHcIu") / 1 * (parseInt("17542oqUspP") / 2) + parseInt("6cbfTxi") / 3 * (-parseInt("260376gZrwxA") / 4) + -parseInt("922920IOrFWu") / 5 + parseInt("3450HhEutL") / 6 * (parseInt("875FZiQCe") / 7) + -parseInt("2874456wBoTVD") / 8 + parseInt("1178937ebUdNO") / 9 + -parseInt("10XqYTpj") / 10 * (-parseInt("11014069SvbmHh") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 205541);
function __STRING_ARRAY__() {
  var _0x3cd9f8 = ["10XqYTpj", "1178937ebUdNO", "37ZmHcIu", "log", "split", "push", "922920IOrFWu", "3450HhEutL", "260376gZrwxA", "/dev/stdin", "2874456wBoTVD", "sort", "11014069SvbmHh", "join", "17542oqUspP", "875FZiQCe", "6cbfTxi", "utf8", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x3cd9f8;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __DECODE_0__(QlvyyK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 266;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QlvyyK, key);
}
while (true) {
  var n = arr.shift() - 0;
  if (n === 0) {
    break;
  }
  var ary = [];
  for (var i = 0; i < n; i++) {
    ary["push"](arr.shift()["split"](" ").map(Number));
  }
  ary["sort"](function (a, b) {
    if (a[2] == b[2] && a[3] == b[3]) {
      return a[0] - b[0];
    } else if (a[2] == b[2]) {
      return a[3] - b[3];
    } else {
      return b[2] - a[2];
    }
  });
  var ans = [];
  var U = [];
  for (var i = 0; i <= 1000; i++) {
    U[i] = 0;
  }
  ary.forEach(function (v, i) {
    var id = v[0];
    var u = v[1];
    if (i < 10) {
      if (U[u] < 3) {
        ans["push"](id);
        U[u]++;
      }
    } else if (i < 20) {
      if (U[u] < 2) {
        ans["push"](id);
        U[u]++;
      }
    } else if (i < 26) {
      if (U[u] == 0) {
        ans["push"](id);
        U[u]++;
      }
    }
  });
  console["log"](ans["join"]("\n"));
}
