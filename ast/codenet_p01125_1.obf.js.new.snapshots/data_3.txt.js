(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("754151qmdlRm") / 1 + parseInt("4634hOLudF") / 2 * (parseInt("717FFohMx") / 3) + -parseInt("195444ezATeT") / 4 + parseInt("4885hMgTMz") / 5 * (parseInt("882yARvbn") / 6) + parseInt("3084074AFMiRF") / 7 + -parseInt("1068392JvvIHl") / 8 + -parseInt("3123DUklhG") / 9 * (-parseInt("6630HzDNhE") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 431464);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x18fa76 = ["utf8", "indexOf", "split", "3123DUklhG", "4885hMgTMz", "3084074AFMiRF", "6630HzDNhE", "195444ezATeT", "4634hOLudF", "every", "log", "717FFohMx", "trim", "readFileSync", "1068392JvvIHl", "Yes", "shift", "882yARvbn", "push", "754151qmdlRm"];
  __STRING_ARRAY__ = function () {
    return _0x18fa76;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(clPSQl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 382;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(clPSQl, key);
}
while (true) {
  var a = Arr["shift"]();
  if (a == "0") {
    break;
  }
  var xy = [];
  for (var i = 0; i < a; i++) {
    xy.push(Arr["shift"]());
  }
  var b = Arr["shift"]();
  var news = [];
  for (var i = 0; i < b; i++) {
    news["push"](Arr.shift());
  }
  var X = 10;
  var Y = 10;
  var XY = [];
  news.forEach(function (v) {
    var arr = v["split"](" ");
    for (var i = 0; i < arr[1] - 0; i++) {
      if (arr[0] == "N") {
        Y++;
      }
      if (arr[0] == "E") {
        X++;
      }
      if (arr[0] == "W") {
        X--;
      }
      if (arr[0] == "S") {
        Y--;
      }
      XY["push"](X + " " + Y);
    }
  });
  var flag = xy["every"](function (v) {
    return XY["indexOf"](v) != -1;
  });
  console["log"](flag ? "Yes" : "No");
}
