function __DECODE_0__(RqClkj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 253;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RqClkj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4652qQwjHb") / 1 * (parseInt("196jVJlqL") / 2) + parseInt("1288401VpzZXE") / 3 * (parseInt("4zilPah") / 4) + parseInt("3359435hCYkrG") / 5 * (parseInt("6FnJKyQ") / 6) + parseInt("8813aTbSqP") / 7 * (-parseInt("2472HhcAid") / 8) + -parseInt("84465qrrzXw") / 9 * (parseInt("550KFtPPx") / 10) + parseInt("7897813CoBNLs") / 11 + parseInt("24KAWsDs") / 12 * (-parseInt("6377826CaHLmQ") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 388823);
function Main(input) {
  var data = input["split"]("\n");
  var n = data[0];
  var a = data["slice"](1);
  for (var i = 0; i < n; ++i) {
    var b = [];
    for (var j = 0; j < a["length"]; j += 2) {
      if (a[j] > a[j + 1]) {
        b["push"](a[j] - a[j + 1]);
      } else if (a[j] == a[j + 1]) {
        b["push"](a[j]);
      } else {
        b["push"](a[j + 1] - a[j]);
      }
    }
    a = b;
  }
  console["log"](a[0]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x78d214 = ["push", "2472HhcAid", "3359435hCYkrG", "196jVJlqL", "/dev/stdin", "split", "length", "utf8", "log", "7897813CoBNLs", "slice", "4zilPah", "6FnJKyQ", "8813aTbSqP", "6377826CaHLmQ", "4652qQwjHb", "550KFtPPx", "84465qrrzXw", "24KAWsDs", "1288401VpzZXE"];
  __STRING_ARRAY__ = function () {
    return _0x78d214;
  };
  return __STRING_ARRAY__();
}
