(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1175417INRWgg") / 1 + -parseInt("1214JsxVmc") / 2 * (parseInt("1884WwHnau") / 3) + parseInt("600824LOFIjd") / 4 * (-parseInt("35NPFSnI") / 5) + -parseInt("7351302qYiKOV") / 6 + parseInt("1407DUNBsF") / 7 + -parseInt("12200008SYyYDW") / 8 * (parseInt("9cfEDZq") / 9) + parseInt("38085960xyQuDl") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 801358);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(HiXkpQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 229;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HiXkpQ, key);
}
function __STRING_ARRAY__() {
  var _0x2c9c8f = ["readFileSync", "split", "9cfEDZq", "7351302qYiKOV", "1407DUNBsF", "35NPFSnI", "trim", "/dev/stdin", "shift", "min", "1884WwHnau", "600824LOFIjd", "log", "1175417INRWgg", "12200008SYyYDW", "38085960xyQuDl", "1214JsxVmc"];
  __STRING_ARRAY__ = function () {
    return _0x2c9c8f;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var nS = Arr["shift"]().split(" ").map(Number);
  var n = nS[0];
  var S = nS[1];
  if (n == 0 && S == 0) {
    break;
  }
  var arr = [];
  for (var i = 0; i <= 100; i++) {
    arr[i] = 0;
  }
  for (var i = 0; i < n; i++) {
    var v = Arr["shift"]() - 0;
    arr[v]++;
  }
  var cnt = 0;
  for (var i = 0; i <= 100; i++) {
    for (var j = i + 1; j <= 100; j++) {
      if (i + j > S) {
        cnt += Math["min"](arr[i], arr[j]);
      }
    }
  }
  console["log"](cnt);
}
