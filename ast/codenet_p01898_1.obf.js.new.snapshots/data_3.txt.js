(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1274160CrJAPn") / 1 + parseInt("7610HcNHxi") / 2 * (parseInt("939bAOtGk") / 3) + -parseInt("4661764FuEpks") / 4 + -parseInt("87215nUixWC") / 5 * (-parseInt("270bAbUgD") / 6) + -parseInt("731353IkiKOe") / 7 + -parseInt("28664XTQTzx") / 8 * (-parseInt("936kEbEBT") / 9) + parseInt("8430230jPPFDy") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 647475);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var [m, n] = arr["shift"]()["split"](" ")["map"](Number);
function __STRING_ARRAY__() {
  var _0x2e5674 = ["trim", "split", "4661764FuEpks", "7610HcNHxi", "8430230jPPFDy", "forEach", "join", "939bAOtGk", "readFileSync", "270bAbUgD", "1274160CrJAPn", "log", "28664XTQTzx", "length", "731353IkiKOe", "shift", "936kEbEBT", "map", "push", "87215nUixWC", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x2e5674;
  };
  return __STRING_ARRAY__();
}
var yx = [];
for (var i = 0; i < m; i++) {
  yx.push(arr["shift"]()["split"](""));
}
var memo = [];
for (var i = 0; i < m; i++) {
  for (var j = 0; j < n; j++) {
    if (i == 0) {
      memo["push"]([i, j]);
    }
    if (yx[i][j] == "o") {
      [[0, -1], [0, 1]]["forEach"](v => {
        var y = i + v[0];
        var x = j + v[1];
        if ((y < 0 || x < 0 || y >= m || x >= n) == false) {
          memo.push([y, x]);
        }
      });
    } else if (yx[i][j] == "x") {
      for (var ii = -1; ii <= 1; ii++) {
        for (var jj = -1; jj <= 1; jj++) {
          if (ii == 0 && jj == 0) {
            continue;
          }
          var y = i + ii;
          var x = j + jj;
          if (y < 0 || x < 0 || y >= m || x >= n) {
            continue;
          }
          memo["push"]([y, x]);
        }
      }
    }
  }
}
function __DECODE_0__(oKinLX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 293;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oKinLX, key);
}
memo.forEach(v => {
  yx[v[0]][v[1]] = "b";
});
console["log"](yx["join"]("").replace(/[^-]/g, "")["length"]);
