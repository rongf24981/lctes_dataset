'use strict';

function __DECODE_0__(AslmeM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AslmeM, key);
}
function __STRING_ARRAY__() {
  var _0x17277d = ["sort", "split", "7605858rxHSTh", "log", "aoki", "1275437mEqRud", "shift", "566072xrVcGa", "taka", "readFileSync", "4515138wqerdt", "/dev/stdin", "7167300kRBKtc", "4357130iQfBOX", "2yyqtRf", "2345624tTwfON"];
  __STRING_ARRAY__ = function () {
    return _0x17277d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1275437mEqRud") / 1 + parseInt("2yyqtRf") / 2 * (parseInt("4515138wqerdt") / 3) + -parseInt("2345624tTwfON") / 4 + parseInt("4357130iQfBOX") / 5 + parseInt("7605858rxHSTh") / 6 + -parseInt("7167300kRBKtc") / 7 + parseInt("566072xrVcGa") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 829131);
function Main(input) {
  var lines = input.split("\n");
  var N = lines["shift"]() - 0;
  var ryo = new Array(N);
  for (var n = 0; n < N; n++) {
    var nums = lines[n]["split"](" ");
    ryo[n] = {
      taka: nums[0] - 0,
      aoki: nums[1] - 0
    };
    ryo[n].sa = ryo[n]["aoki"] - ryo[n]["taka"];
  }
  ryo.sort(function (a, b) {
    return b.sa - a.sa;
  });
  ryo["sort"](function (a, b) {
    return b.taka - a.taka;
  });
  var koufuku = 0;
  for (var n = 0; n < N; n++) {
    if (n % 2 == 0) {
      koufuku += ryo[n]["taka"];
      ryo[n]["taka"] = 0;
    } else {
      koufuku -= ryo[n].aoki;
      ryo[n].aoki = 0;
    }
  }
  console["log"](koufuku);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
