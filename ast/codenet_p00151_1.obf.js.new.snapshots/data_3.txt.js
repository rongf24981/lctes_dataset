(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("49sqAWDq") / 1 * (-parseInt("53262JQicmU") / 2) + parseInt("4042347wvGApE") / 3 + parseInt("1308328ELPzth") / 4 + parseInt("2323635IJKXdg") / 5 + parseInt("79962zwNAIg") / 6 * (-parseInt("14iACzDA") / 7) + parseInt("109656dEwrvN") / 8 * (parseInt("729bzhVlz") / 9) + -parseInt("170fNFtWj") / 10 * (parseInt("755513HMlkBN") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 750341);
function __STRING_ARRAY__() {
  var _0x48109d = ["max", "49sqAWDq", "4042347wvGApE", "split", "utf8", "79962zwNAIg", "readFileSync", "log", "/dev/stdin", "53262JQicmU", "109656dEwrvN", "170fNFtWj", "755513HMlkBN", "729bzhVlz", "1308328ELPzth", "2323635IJKXdg", "trim", "14iACzDA", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x48109d;
  };
  return __STRING_ARRAY__();
}
function count(y, x) {
  var dy = [0, 1, 1, 1];
  var dx = [1, -1, 0, 1];
  var max = 1;
  for (var i = 0; i < 4; i++) {
    var cnt = 1;
    for (var j = 1; j <= n; j++) {
      var yy = y + dy[i] * j;
      var xx = x + dx[i] * j;
      if (yy < 0 || xx < 0 || yy >= n || xx >= n) {
        break;
      }
      if (yx[yy][xx] != 1) {
        break;
      }
      cnt++;
    }
    max = Math["max"](max, cnt);
    cnt = 1;
  }
  return max;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(SIrLqe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 468;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SIrLqe, key);
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var yx = [];
  for (var i = 0; i < n; i++) {
    yx[i] = Arr.shift()["split"]("").map(Number);
  }
  var max = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (yx[i][j] == 1) {
        max = Math.max(max, count(i, j));
      }
    }
  }
  console["log"](max);
}
