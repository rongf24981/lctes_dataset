'use strict';

function __STRING_ARRAY__() {
  var _0x53d07e = ["fill", "slice", "120570OcoqFM", "1040238YMwOdN", "2277874vIiEvA", "7FdAtkA", "3wgumcm", "alloc", "1953RgzXDI", "8295736GszoED", "erase", "4221148qPqUTg", "YES", "eraser", "dreamer", "trim", "log", "1024454uzBPno", "9057905bPekOa", "length", "dream"];
  __STRING_ARRAY__ = function () {
    return _0x53d07e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1024454uzBPno") / 1 + -parseInt("2277874vIiEvA") / 2 * (parseInt("3wgumcm") / 3) + parseInt("4221148qPqUTg") / 4 + -parseInt("9057905bPekOa") / 5 + parseInt("1040238YMwOdN") / 6 + parseInt("7FdAtkA") / 7 * (parseInt("8295736GszoED") / 8) + -parseInt("1953RgzXDI") / 9 * (-parseInt("120570OcoqFM") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 907024);
var fs = require("fs");
function __DECODE_0__(omnLfB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 475;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(omnLfB, key);
}
var input = Buffer["alloc"](65536);
var length = fs.readSync(0, input, 0, 65536);
var text = input.toString()["slice"](0, length)["trim"]();
var dp = Array(text["length"] + 1)["fill"](false);
dp[0] = true;
for (var index = 5; index <= text["length"]; index++) {
  if (dp[index - 5] === true && text["slice"](index - 5, index) === "dream") {
    dp[index] = true;
    continue;
  }
  if (dp[index - 7] === true && text["slice"](index - 7, index) === "dreamer") {
    dp[index] = true;
    continue;
  }
  if (dp[index - 5] === true && text["slice"](index - 5, index) === "erase") {
    dp[index] = true;
    continue;
  }
  if (dp[index - 6] === true && text["slice"](index - 6, index) === "eraser") {
    dp[index] = true;
    continue;
  }
}
console["log"](dp[text["length"]] ? "YES" : "NO");
