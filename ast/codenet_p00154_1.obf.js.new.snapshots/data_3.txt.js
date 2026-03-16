(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1YXVtLU") / 1 * (-parseInt("564494rKsCoU") / 2) + -parseInt("3KVrePa") / 3 * (-parseInt("952936wZnVRS") / 4) + -parseInt("1275870riCyxX") / 5 + -parseInt("1130448WCCWXN") / 6 + parseInt("49zDqTbn") / 7 * (-parseInt("122552eIIJwt") / 8) + parseInt("1832247ArAMti") / 9 + parseInt("5393990nouSlZ") / 10 * (parseInt("11kNwluI") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 148154);
function __DECODE_0__(awfiOF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 246;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(awfiOF, key);
}
function bomb(start, sum) {
  dp[start][sum]++;
  if (start == card["length"]) {
    return;
  }
  var v = card[start][0];
  var k = card[start][1];
  for (var i = 0; i <= k; i++) {
    bomb(start + 1, sum + v * i);
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x8b59ff = ["length", "split", "/dev/stdin", "readFileSync", "11kNwluI", "952936wZnVRS", "1130448WCCWXN", "3KVrePa", "1275870riCyxX", "122552eIIJwt", "564494rKsCoU", "5393990nouSlZ", "log", "49zDqTbn", "1YXVtLU", "1832247ArAMti", "trim", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x8b59ff;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var m = arr["shift"]() - 0;
  if (m == 0) {
    break;
  }
  var card = [];
  while (m--) {
    card.push(arr.shift()["split"](" ").map(Number));
  }
  var g = arr.shift() - 0;
  var dp = [];
  for (var i = 0; i <= card["length"]; i++) {
    dp[i] = [];
    for (var j = 0; j <= 1000; j++) {
      dp[i][j] = 0;
    }
  }
  bomb(0, 0);
  while (g--) {
    console["log"](dp[card["length"]][arr["shift"]() - 0]);
  }
}
